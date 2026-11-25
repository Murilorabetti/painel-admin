// src/pages/Backups.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Backups() {
  const navigate = useNavigate();

  // Dados fictícios dos backups
  const backups = [
    { id: 1, data: "Hoje, 03:00 AM", tamanho: "1.2 GB", tipo: "Automático", status: "Concluído", cor: "#00ffcc" },
    { id: 2, data: "Ontem, 03:00 AM", tamanho: "1.1 GB", tipo: "Automático", status: "Concluído", cor: "#00ffcc" },
    { id: 3, data: "22 de Nov, 14:30", tamanho: "1.3 GB", tipo: "Manual", status: "Concluído", cor: "#00aaff" },
    { id: 4, data: "21 de Nov, 03:00 AM", tamanho: "1.1 GB", tipo: "Automático", status: "Concluído", cor: "#00ffcc" },
  ];

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "#050a12", // Fundo azul quase preto
      color: "#fff",
      padding: "40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: "hidden"
    }}>
      
      {/* Imagem de fundo sutil (servidores/dados) */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.08,
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
        <div style={{ marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h1 style={{ fontSize: "3rem", fontWeight: "800", margin: 0, color: "#fff" }}>
              Backups <span style={{ color: "#00ffcc" }}>💾</span>
            </h1>
            <p style={{ color: "#8892b0", fontSize: "1.1rem", marginTop: "10px" }}>
              Gerencie as cópias de segurança dos seus dados.
            </p>
          </div>
          
          <button style={{
            background: "linear-gradient(45deg, #00ffcc, #0066ff)",
            color: "#000",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 0 20px rgba(0, 255, 204, 0.4)",
            transition: "transform 0.2s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            + Criar Novo Backup
          </button>
        </div>

        {/* Grid de Status */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "20px",
          marginBottom: "40px"
        }}>
          <div style={statCardStyle}>
            <div style={{ fontSize: "2rem", color: "#00ffcc" }}>☁️</div>
            <div>
              <p style={statLabelStyle}>Último Backup</p>
              <h3 style={statValueStyle}>Hoje, 03:00</h3>
            </div>
          </div>
          <div style={statCardStyle}>
            <div style={{ fontSize: "2rem", color: "#00aaff" }}>📦</div>
            <div>
              <p style={statLabelStyle}>Espaço Utilizado</p>
              <h3 style={statValueStyle}>4.7 GB / 10 GB</h3>
            </div>
          </div>
          <div style={statCardStyle}>
            <div style={{ fontSize: "2rem", color: "#ffaa00" }}>🔄</div>
            <div>
              <p style={statLabelStyle}>Próximo Backup</p>
              <h3 style={statValueStyle}>Amanhã, 03:00</h3>
            </div>
          </div>
        </div>

        {/* Lista de Backups */}
        <div style={{
          background: "rgba(20, 30, 45, 0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 255, 204, 0.15)",
          borderRadius: "20px",
          padding: "30px"
        }}>
          <h2 style={{ margin: "0 0 20px 0", fontSize: "1.5rem", color: "#e6f1ff" }}>Histórico de Backups</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {backups.map((backup) => (
              <div key={backup.id} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "10px",
                flexWrap: "wrap",
                gap: "15px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ fontSize: "1.8rem" }}>🗄️</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: "1rem", color: "#e6f1ff" }}>{backup.data}</h4>
                    <p style={{ margin: "3px 0 0 0", color: "#8892b0", fontSize: "0.85rem" }}>
                      Tamanho: {backup.tamanho} • Tipo: {backup.tipo}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <span style={{ color: backup.cor, fontSize: "0.9rem", fontWeight: "bold", background: `rgba(${parseInt(backup.cor.slice(1,3), 16)}, ${parseInt(backup.cor.slice(3,5), 16)}, ${parseInt(backup.cor.slice(5,7), 16)}, 0.1)`, padding: "5px 10px", borderRadius: "20px" }}>
                    {backup.status}
                  </span>
                  <button style={{ background: "transparent", border: "1px solid #555", color: "#ccc", padding: "8px 15px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "0.8rem", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "#00ffcc"; e.currentTarget.style.color = "#00ffcc"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#ccc"; }}
                  >
                    Restaurar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Estilos reutilizáveis
const statCardStyle = {
  background: "rgba(20, 30, 45, 0.6)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "15px",
  padding: "25px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const statLabelStyle = {
  margin: 0,
  color: "#8892b0",
  fontSize: "0.9rem",
  textTransform: "uppercase",
  letterSpacing: "1px"
};

const statValueStyle = {
  margin: "5px 0 0 0",
  fontSize: "1.5rem",
  color: "#fff"
};