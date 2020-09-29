import React, { useState } from "react";
import { Link } from "react-router-dom";
// componenents
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // error
  const [errorName, setErrorName] = useState(false);
  const [errorLastname, setErrorLastname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorTextarea, setErrorTextarea] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  // on récupère les valeurs
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleTextarea = (event) => {
    setTextarea(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  // soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name !== "" &&
      lastname !== "" &&
      email !== "" &&
      textarea !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      alert("inscription ok");
    } else {
      if (name === "") {
        setErrorName(true);
      }
      if (lastname === "") {
        setErrorLastname(true);
      }
      if (email === "") {
        setErrorEmail(true);
      }
      if (textarea === "") {
        setErrorTextarea(true);
      }
      if (password === "") {
        setErrorPassword(true);
      }
      if (confirmPassword === "") {
        setErrorConfirmPassword(true);
      }
    }
  };

  return (
    <div id="main">
      <div className="bott60">
        <h1>Inscrivez-vous</h1>
      </div>
      <form id="signup" onSubmit={handleSubmit}>
        <div className="flex">
          <div>
            <Input
              type="text"
              placeholder="votre nom"
              value={name}
              onChange={handleName}
              className={errorName === true ? "errorInput" : null}
            />
            {errorName && <p className="error">merci de remplir le nom</p>}
          </div>
          <div>
            <Input
              type="text"
              placeholder="votre prénom"
              value={lastname}
              onChange={handleLastname}
              className={errorLastname === true ? "errorInput" : null}
            />
            {errorLastname && (
              <p className="error">merci de remplir le prénom</p>
            )}
          </div>
        </div>
        <Input
          type="email"
          placeholder="votre email"
          value={email}
          onChange={handleEmail}
          className={errorEmail === true ? "errorInput" : null}
        />
        {errorEmail && <p className="error">merci de remplir l'email</p>}

        <Textarea
          placeholder="à propose de vous ..."
          rows="5"
          value={textarea}
          onChange={handleTextarea}
          className={errorTextarea === true ? "errorInput" : null}
        />
        {errorTextarea && <p className="error">merci de remplir le champ</p>}

        <div className="flex">
          <div>
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
          </div>
          <div>
            <Input
              type="password"
              placeholder="confirmez votre mot de passe"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className={errorConfirmPassword === true ? "errorInput" : null}
            />
            {errorConfirmPassword && (
              <p className="error">merci de remplir la confirmation</p>
            )}
          </div>
        </div>
        <Input type="submit" value="S'inscrire" />
      </form>

      <Link to="/" className="signupLink">
        retour vers la connexion ? cliquez ici
      </Link>
    </div>
  );
};

export default Signup;
