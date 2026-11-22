// src/pages/Seguranca.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Seguranca() {
  const navigate = useNavigate();

  // Dados fictícios dos últimos acessos
  const acessos = [
    { dispositivo: "Windows 11 - Chrome", local: "São Paulo, BR", data: "Hoje, 10:45", ip: "192.168.1.5", atual: true, icone: "💻" },
    { dispositivo: "iPhone 13 - Safari", local: "São Paulo, BR", data: "Ontem, 18:20", ip: "191.23.45.67", atual: false, icone: "📱" },
    { dispositivo: "MacBook Pro - Firefox", local: "Rio de Janeiro, BR", data: "12 de Nov, 09:15", ip: "177.45.12.89", atual: false, icone: "💻" }
  ];

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "#050a12", // Azul quase preto
      color: "#fff",
      padding: "40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: "hidden"
    }}>
      
      {/* Imagem de fundo sutil (escudo/circuito) */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.08, // Bem apagada
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
            Segurança <span style={{ color: "#00ffcc" }}>🛡️</span>
          </h1>
          <p style={{ color: "#8892b0", fontSize: "1.1rem", marginTop: "10px" }}>
            Monitore a integridade da sua conta e do sistema.
          </p>
        </div>

        {/* ALERTA DE STATUS: TUDO SEGURO */}
        <div style={{
          background: "rgba(0, 255, 204, 0.1)",
          border: "1px solid #00ffcc",
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "40px",
          boxShadow: "0 0 20px rgba(0, 255, 204, 0.2)"
        }}>
          <div style={{ fontSize: "2.5rem" }}>✅</div>
          <div>
            <h3 style={{ margin: 0, color: "#00ffcc", fontSize: "1.3rem" }}>Sistema Seguro</h3>
            <p style={{ margin: "5px 0 0 0", color: "#a0f0e0", fontSize: "0.95rem" }}>
              Nenhuma ameaça detectada. Suas credenciais e dados estão protegidos.
            </p>
          </div>
        </div>

        {/* Grid de Cards de Segurança */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "20px",
          marginBottom: "40px"
        }}>
          
          {/* Card 1: Autenticação 2FA */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={iconBoxStyle}>🔐</div>
              <span style={{ color: "#00ffcc", fontSize: "0.8rem", fontWeight: "bold", background: "rgba(0, 255, 204, 0.1)", padding: "4px 8px", borderRadius: "10px" }}>Ativado</span>
            </div>
            <h3 style={titleStyle}>Autenticação de 2 Fatores</h3>
            <p style={descStyle}>Sua conta está protegida com uma camada extra de segurança.</p>
            <button style={buttonStyle}>Gerenciar 2FA</button>
          </div>

          {/* Card 2: Alterar Senha */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ ...iconBoxStyle, color: "#ffaa00", background: "rgba(255, 170, 0, 0.1)" }}>🔑</div>
              <span style={{ color: "#ffaa00", fontSize: "0.8rem", fontWeight: "bold", background: "rgba(255, 170, 0, 0.1)", padding: "4px 8px", borderRadius: "10px" }}>Última vez: 3 meses</span>
            </div>
            <h3 style={titleStyle}>Senha da Conta</h3>
            <p style={descStyle}>Recomendamos alterar sua senha periodicamente.</p>
            <button style={{ ...buttonStyle, color: "#ffaa00", borderColor: "rgba(255, 170, 0, 0.3)" }}>Alterar Senha</button>
          </div>

          {/* Card 3: Logs de Atividade */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ ...iconBoxStyle, color: "#ff3366", background: "rgba(255, 51, 102, 0.1)" }}>📋</div>
            </div>
            <h3 style={titleStyle}>Histórico de Atividade</h3>
            <p style={descStyle}>Veja todos os logins e ações realizadas recentemente.</p>
            <button style={{ ...buttonStyle, color: "#ff3366", borderColor: "rgba(255, 51, 102, 0.3)" }}>Ver Logs Completos</button>
          </div>

        </div>

        {/* SEÇÃO: DISPOSITIVOS CONECTADOS */}
        <div style={{
          background: "rgba(20, 30, 45, 0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 255, 204, 0.15)",
          borderRadius: "20px",
          padding: "30px"
        }}>
          <h2 style={{ margin: "0 0 20px 0", fontSize: "1.5rem", color: "#e6f1ff" }}>Dispositivos Conectados</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {acessos.map((acesso, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px",
                background: acesso.atual ? "rgba(0, 255, 204, 0.05)" : "rgba(255, 255, 255, 0.02)",
                border: acesso.atual ? "1px solid rgba(0, 255, 204, 0.3)" : "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "10px",
                flexWrap: "wrap",
                gap: "15px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ fontSize: "1.8rem" }}>{acesso.icone}</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: "1rem", color: "#e6f1ff" }}>
                      {acesso.dispositivo} {acesso.atual && <span style={{ color: "#00ffcc", fontSize: "0.8rem", marginLeft: "10px" }}>(Este dispositivo)</span>}
                    </h4>
                    <p style={{ margin: "3px 0 0 0", color: "#8892b0", fontSize: "0.85rem" }}>
                      {acesso.local} • IP: {acesso.ip}
                    </p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: 0, color: "#8892b0", fontSize: "0.85rem" }}>{acesso.data}</p>
                  {!acesso.atual && (
                    <button style={{ background: "transparent", border: "none", color: "#ff3366", cursor: "pointer", fontSize: "0.8rem", marginTop: "5px", fontWeight: "bold" }}>
                      Desconectar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Estilos reutilizáveis para manter o código limpo
const cardStyle = {
  background: "rgba(20, 30, 45, 0.6)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "15px",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  transition: "transform 0.3s ease",
};

const iconBoxStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "12px",
  background: "rgba(0, 255, 204, 0.1)",
  color: "#00ffcc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
};

const titleStyle = {
  margin: 0,
  fontSize: "1.2rem",
  color: "#e6f1ff"
};

const descStyle = {
  margin: 0,
  color: "#8892b0",
  fontSize: "0.9rem",
  lineHeight: "1.5",
  flex: 1
};

const buttonStyle = {
  background: "transparent",
  color: "#00ffcc",
  border: "1px solid rgba(0, 255, 204, 0.3)",
  padding: "10px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  marginTop: "10px"
};