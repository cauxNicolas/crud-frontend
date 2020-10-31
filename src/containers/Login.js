import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// componenents
import Input from "../components/Input";
// bdd
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  // error
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorResponseData, setResponseData] = useState("");
  // navigation
  const history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setpassword(event.target.value);
  };
  // soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      try {
        const response = await axios.post("http://localhost:3100/", {
          email,
          password,
        });
        if (response.status === 200) {
          history.push("/home");
        }
      } catch (error) {
        console.log(error.response.data);
        setResponseData(error.response.data);
      }
    } else {
      if (email === "") {
        setErrorEmail(true);
      }
      if (password === "") {
        setErrorPassword(true);
      }
    }
  };

  return (
    <div id="main">
      <div className="bott60">
        <h1>Bienvenue sur la home page Login</h1>
      </div>
      <form id="login" onSubmit={handleSubmit}>
        {errorResponseData && (
          <div id="infoError">
            <p>{errorResponseData}</p>
          </div>
        )}
        <Input
          type="email"
          placeholder="votre email"
          value={email}
          onChange={handleEmail}
          className={errorEmail === true ? "errorInput" : null}
        />
        {errorEmail && <p className="error">merci de remplir l'email</p>}
        <Input
          type="password"
          placeholder="votre mot de passe"
          value={password}
          onChange={handlePassword}
          className={errorPassword === true ? "errorInput" : null}
        />
        {errorPassword && (
          <p className="error">merci de remplir le mot de passe</p>
        )}
        <Input type="submit" value="Valider" />
      </form>

      <Link to="/signup" className="signupLink">
        Toujours pas inscris ? cliquez ici
      </Link>
    </div>
  );
};

export default Login;
