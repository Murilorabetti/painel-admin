// src/pages/register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro aqui
    console.log("Cadastrando:", { name, email, password });
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button 
          type="submit"
          style={{ 
            width: "100%", 
            padding: "12px", 
            backgroundColor: "#28a745", 
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Cadastrar
        </button>
      </form>
      <p style={{ marginTop: "15px" }}>
        Já tem conta?{" "}
        <button 
          onClick={() => navigate("/login")} 
          style={{ 
            color: "#007bff", 
            background: "none", 
            border: "none", 
            cursor: "pointer",
            textDecoration: "underline"
          }}
        >
          Faça login
        </button>
      </p>
    </div>
  );
}