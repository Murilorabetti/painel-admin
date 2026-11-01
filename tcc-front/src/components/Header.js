// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{
      backgroundColor: "#333",
      color: "white",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2>Meu Sistema</h2>
      <nav>
        <Link to="/home" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>
        <button 
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Sair
        </button>
      </nav>
    </header>
  );
}