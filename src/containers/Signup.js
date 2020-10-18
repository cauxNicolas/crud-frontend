import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// componenents
import Input from "../components/Input";
import Textarea from "../components/Textarea";
// bdd
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inscriptionOK, setInscriptionOk] = useState("");
  // error
  const [errorName, setErrorName] = useState(false);
  const [errorLastname, setErrorLastname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorTextarea, setErrorTextarea] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [passwordEgalConfirm, setPasswordEgalConfirm] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [errorResponseData, setErrorResponseData] = useState("");

  // redirection
  const history = useHistory();

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
      if (password.length >= 5 || confirmPassword.length >= 5) {
        if (password === confirmPassword) {
          try {
            const response = await axios.post("http://localhost:3100/signup", {
              name,
              lastname,
              email,
              textarea,
              password,
            });
            setErrorResponseData("");
            setName("");
            setLastname("");
            setEmail("");
            setTextarea("");
            setPassword("");
            setConfirmPassword("");
            setInscriptionOk(response.data.info);
            // on remets à zéro le composant au bout de 4s
            setTimeout(() => {
              setInscriptionOk("");
              history.push("/");
            }, 4000);
          } catch (error) {
            setErrorResponseData(`${email} ${error.response.data}`);
          }
        } else {
          setErrorPass(true);
          setPasswordEgalConfirm(true);
        }
      } else {
        setErrorPass(true);
        setPasswordLength(true);
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
        setErrorPass(true);
        setErrorPassword(true);
      }
      if (confirmPassword === "") {
        setErrorPass(true);
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
              className={errorPass === true ? "errorInput" : null}
            />
            {errorPassword && (
              <p className="error">merci de remplir le mot de passe</p>
            )}
            {passwordEgalConfirm && (
              <p className="error">Les mots de passe ne sont pas identiques</p>
            )}
            {passwordLength && <p className="error">Minimum 5 lettres</p>}
          </div>
          <div>
            <Input
              type="password"
              placeholder="confirmez votre mot de passe"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className={errorPass === true ? "errorInput" : null}
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
