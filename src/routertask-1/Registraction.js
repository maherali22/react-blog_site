import React from "react";
import { useNavigate } from "react-router-dom";

const Registraction = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <h2>Registraction</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Usename" required />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registraction;
