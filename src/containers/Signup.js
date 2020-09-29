import React from "react";
import { Link } from "react-router-dom";
// componenents
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const Signup = () => {
  return (
    <div id="main">
      <div className="bott60">
        <h1>Inscrivez-vous</h1>
      </div>
      <form id="signup">
        <div className="flex">
          <Input type="text" placeholder="votre nom" />
          <Input type="text" placeholder="votre prénom" />
        </div>
        <Input type="email" placeholder="votre email" />
        <Textarea placeholder="à propose de vous ..." rows="5" />
        <div className="flex">
          <Input type="password" placeholder="votre mot de passe" />
          <Input type="password" placeholder="confirmez votre mot de passe" />
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
