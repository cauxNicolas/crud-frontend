import React from "react";
import { Link } from "react-router-dom";
// componenents
import Input from "../components/Input";

const Login = () => {
  return (
    <div id="main">
      <div className="bott60">
        <h1>Bienvenue sur la home page Login</h1>
      </div>
      <form id="login">
        <Input type="email" placeholder="votre email" />
        <Input type="password" placeholder="votre mot de passe" />
        <Input type="submit" value="Valider" />
      </form>

      <Link to="/signup" className="signupLink">
        Toujours pas inscris ? cliquez ici
      </Link>
    </div>
  );
};

export default Login;
