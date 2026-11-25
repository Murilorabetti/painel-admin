// src/pages/Configuracoes.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Configuracoes() {
  const navigate = useNavigate();
  const [notificacoes, setNotificacoes] = useState(true);
  const [modoEscuro, setModoEscuro] = useState(true);
  const [autoBackup, setAutoBackup] = useState(false);

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "#0a0f18",
      color: "#fff",
      padding: "40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: "hidden"
    }}>
      
      {/* Imagem de fundo sutil (circuitos) */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.1,
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Botão de Voltar */}
        <button 
          onClick={() => navigate("/home")}
          style={{ 
            background: "rgba(255, 255, 255, 0.05)", 
            color: "#00ffcc", 
            border: "1px solid rgba(0, 255, 204, 0.3)", 
            padding: "10px 20px", 
            borderRadius: "8px", 
            cursor: "pointer",
            marginBottom: "30px",
            fontFamily: "monospace",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(0, 255, 204, 0.1)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
        >
          &lt; Voltar para Home
        </button>

        {/* Título */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", margin: 0, color: "#fff" }}>
            Configurações <span style={{ color: "#00ffcc" }}>⚙️</span>
          </h1>
          <p style={{ color: "#8892b0", fontSize: "1.1rem", marginTop: "10px" }}>
            Personalize a experiência do seu sistema e gerencie preferências.
          </p>
        </div>

        {/* Container Principal de Configurações */}
        <div style={{ display: "grid", gap: "20px" }}>
          
          {/* Card: Notificações */}
          <div style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={iconContainerStyle}>🔔</div>
              <div>
                <h3 style={titleStyle}>Notificações Push</h3>
                <p style={descStyle}>Receba alertas em tempo real sobre o sistema.</p>
              </div>
            </div>
            <div 
              onClick={() => setNotificacoes(!notificacoes)}
              style={{
                ...toggleStyle,
                background: notificacoes ? "#00ffcc" : "#333",
                justifyContent: notificacoes ? "flex-end" : "flex-start"
              }}
            >
              <div style={toggleCircleStyle} />
            </div>
          </div>

          {/* Card: Modo Escuro */}
          <div style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={iconContainerStyle}>🌙</div>
              <div>
                <h3 style={titleStyle}>Modo Escuro</h3>
                <p style={descStyle}>Ative o tema escuro em todo o painel.</p>
              </div>
            </div>
            <div 
              onClick={() => setModoEscuro(!modoEscuro)}
              style={{
                ...toggleStyle,
                background: modoEscuro ? "#00ffcc" : "#333",
                justifyContent: modoEscuro ? "flex-end" : "flex-start"
              }}
            >
              <div style={toggleCircleStyle} />
            </div>
          </div>

          {/* Card: Backup Automático */}
          <div style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={iconContainerStyle}>💾</div>
              <div>
                <h3 style={titleStyle}>Backup Automático</h3>
                <p style={descStyle}>Salve cópias de segurança dos dados diariamente.</p>
              </div>
            </div>
            <div 
              onClick={() => setAutoBackup(!autoBackup)}
              style={{
                ...toggleStyle,
                background: autoBackup ? "#00ffcc" : "#333",
                justifyContent: autoBackup ? "flex-end" : "flex-start"
              }}
            >
              <div style={toggleCircleStyle} />
            </div>
          </div>

          {/* Card: Segurança (Visual apenas) */}
          <div style={{ ...cardStyle, flexDirection: "column", alignItems: "stretch", gap: "15px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ ...iconContainerStyle, background: "rgba(255,0,0,0.1)", color: "#ff4444" }}>🛡️</div>
              <div>
                <h3 style={titleStyle}>Segurança da Conta</h3>
                <p style={descStyle}>Altere sua senha e gerencie dispositivos conectados.</p>
              </div>
            </div>
            <button style={{
              background: "transparent",
              color: "#ff4444",
              border: "1px solid #ff4444",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 68, 68, 0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              Alterar Senha
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

// Estilos reutilizáveis para não poluir o código principal
const cardStyle = {
  background: "rgba(20, 30, 45, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(0, 255, 204, 0.15)",
  borderRadius: "15px",
  padding: "25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
  transition: "transform 0.3s ease, border 0.3s ease",
};

const iconContainerStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  background: "rgba(0, 255, 204, 0.1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  color: "#00ffcc",
  flexShrink: 0
};

const titleStyle = {
  margin: "0 0 5px 0",
  fontSize: "1.2rem",
  color: "#e6f1ff"
};

const descStyle = {
  margin: 0,
  color: "#8892b0",
  fontSize: "0.9rem"
};

const toggleStyle = {
  width: "50px",
  height: "28px",
  borderRadius: "15px",
  display: "flex",
  alignItems: "center",
  padding: "3px",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

const toggleCircleStyle = {
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  background: "#fff",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
};