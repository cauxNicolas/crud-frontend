import React, { useState } from "react";
import { Link } from "react-router-dom";
// componenents
import Input from "../components/Input";
// bdd
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

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
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
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
