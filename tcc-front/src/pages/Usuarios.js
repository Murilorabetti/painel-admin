// src/pages/Usuarios.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Usuarios() {
  const navigate = useNavigate();

  // Dados atualizados com os nomes e fotos da pasta public
  const users = [
    {
      id: 1,
      nome: "Adriana Rabetti",
      cargo: "Administradora",
      email: "adriana.rabetti@empresa.com",
      status: "Online",
      img: "/adriana.jpg", 
      cor: "#00ffcc",
    },
    {
      id: 2,
      nome: "Eduardo Malengo",
      cargo: "Gerente de Projetos",
      email: "eduardo.malengo@empresa.com",
      status: "Offline",
      img: "/eduardo.jpg",
      cor: "#ff00ff",
    },
    {
      id: 3,
      nome: "Lídia Monique",
      cargo: "Desenvolvedora Front-end",
      email: "lidia.monique@empresa.com",
      status: "Online",
      img: "/lidia.jpg",
      cor: "#ffaa00",
    },
    {
      id: 4,
      nome: "Murilo Rabetti",
      cargo: "Analista de Segurança",
      email: "murilo.rabetti@empresa.com",
      status: "Offline",
      img: "/murilo.jpg",
      cor: "#00aaff",
    },
    {
      id: 5,
      nome: "Igor Rabetti",
      cargo: "UX/UI Designer",
      email: "igor.rabetti@empresa.com",
      status: "Online",
      img: "/igor.jpg",
      cor: "#ff3366",
    },
    {
      id: 6,
      nome: "Maily",
      cargo: "Diretora de Tecnologia",
      email: "maily@empresa.com",
      status: "Offline",
      img: "/maily.jpg",
      cor: "#9d00ff",
    },
  ];

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", 
      color: "#fff",
      padding: "40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: "hidden"
    }}>
      
      {/* Elementos decorativos de fundo (bolhas de luz) */}
      <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(0, 255, 204, 0.15) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255, 0, 255, 0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Botão de Voltar */}
        <button 
          onClick={() => navigate("/home")}
          style={{ 
            background: "rgba(255, 255, 255, 0.1)", 
            color: "#fff", 
            border: "1px solid rgba(255, 255, 255, 0.2)", 
            padding: "10px 20px", 
            borderRadius: "8px", 
            cursor: "pointer",
            marginBottom: "30px",
            backdropFilter: "blur(5px)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"}
        >
          &lt; Voltar para Home
        </button>

        {/* Título da Página */}
        <div style={{ marginBottom: "50px" }}>
          <h1 style={{ 
            fontSize: "3.5rem", 
            fontWeight: "800", 
            margin: 0,
            background: "linear-gradient(90deg, #00ffcc, #ff00ff)", 
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-1px"
          }}>
            Nossa Equipe
          </h1>
          <p style={{ color: "#aaa", fontSize: "1.2rem", marginTop: "10px" }}>
            Conheça os profissionais que fazem a mágica acontecer.
          </p>
        </div>

        {/* Grid de Usuários */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}>
          {users.map((user) => (
            <div key={user.id} style={{
              background: "rgba(255, 255, 255, 0.05)", 
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: `1px solid ${user.cor}33`, 
              boxShadow: `0 10px 30px -10px ${user.cor}66`, 
              transition: "transform 0.3s ease, boxShadow 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = `0 20px 40px -10px ${user.cor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${user.cor}66`;
            }}
            >
              {/* Foto de Perfil */}
              <div style={{ position: "relative", marginBottom: "20px" }}>
                <img 
                  src={user.img} 
                  alt={user.nome} 
                  style={{ 
                    width: "100px", 
                    height: "100px", 
                    borderRadius: "50%", 
                    objectFit: "cover",
                    border: `3px solid ${user.cor}`,
                    padding: "3px"
                  }} 
                />
                {/* Indicador de Status */}
                <div style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: user.status === "Online" ? "#00ff00" : "#ff3333",
                  border: "3px solid #1e1e1e",
                  boxShadow: user.status === "Online" ? "0 0 10px #00ff00" : "none"
                }} />
              </div>

              {/* Informações */}
              <h3 style={{ fontSize: "1.4rem", margin: "0 0 5px 0", color: "#fff" }}>{user.nome}</h3>
              <p style={{ color: user.cor, fontSize: "0.9rem", fontWeight: "bold", margin: "0 0 15px 0", textTransform: "uppercase", letterSpacing: "1px" }}>
                {user.cargo}
              </p>
              <div style={{ 
                background: "rgba(0,0,0,0.3)", 
                padding: "8px 15px", 
                borderRadius: "20px", 
                fontSize: "0.85rem", 
                color: "#ccc",
                width: "100%",
                boxSizing: "border-box"
              }}>
                {user.email}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}