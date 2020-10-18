import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// componenents
import Input from "../components/Input";
import Textarea from "../components/Textarea";
// bdd
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("a");
  const [lastname, setLastname] = useState("a");
  const [email, setEmail] = useState("a@a.fr");
  const [textarea, setTextarea] = useState("aaaa");
  const [password, setPassword] = useState("a");
  const [confirmPassword, setConfirmPassword] = useState("a");
  const [inscriptionOK, setInscriptionOk] = useState("");
  // error
  const [errorName, setErrorName] = useState(false);
  const [errorLastname, setErrorLastname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorTextarea, setErrorTextarea] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [passwordEgalConfirm, setPasswordEgalConfirm] = useState(false);
  const [errorResponseData, setErrorResponseData] = useState("");

  // setTimeout
  useEffect(() => {}, []);

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
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      // contrôle des champs vides
      name !== "" &&
      lastname !== "" &&
      email !== "" &&
      textarea !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post("http://localhost:3100/signup", {
            name,
            lastname,
            email,
            textarea,
            password,
            confirmPassword,
          });
          setErrorResponseData("");
          setInscriptionOk(response.data.info);
          // on remets à zéro le composant au bout de 3s
          setTimeout(() => {
            setInscriptionOk("");
          }, 3000);
        } catch (error) {
          setErrorResponseData(`${email} ${error.response.data}`);
        }
      } else {
        setPasswordEgalConfirm(true);
      }
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
        {errorResponseData && (
          <div id="infoError">
            <p>{errorResponseData}</p>
          </div>
        )}
        {inscriptionOK && (
          <div id="infoOk">
            <p>{inscriptionOK}</p>
          </div>
        )}
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
              className={passwordEgalConfirm === true ? "errorInput" : null}
            />
            {errorPassword && (
              <p className="error">merci de remplir le mot de passe</p>
            )}
            {passwordEgalConfirm && (
              <p className="error">Les mots de passe ne sont pas identiques</p>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="confirmez votre mot de passe"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className={errorConfirmPassword === true ? "errorInput" : null}
              className={passwordEgalConfirm === true ? "errorInput" : null}
            />
            {errorConfirmPassword && (
              <p className="error">merci de remplir la confirmation</p>
            )}
            {passwordEgalConfirm && <p className="error"></p>}
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
