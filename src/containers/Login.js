import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/signup">vers la page signup</Link>
      <p>Bienvenue sur la home page Login</p>
    </div>
  );
};

export default Login;
