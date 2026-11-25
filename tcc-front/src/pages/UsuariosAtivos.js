// src/pages/UsuariosAtivos.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function UsuariosAtivos() {
  const navigate = useNavigate();

  // Dados fictícios dos usuários online
  const usuariosOnline = [
    { id: 1, nome: "Adriana Rabetti", cargo: "Administradora", local: "São Paulo, BR", ip: "192.168.1.10", tempo: "2h 15m", img: "/adriana.jpg", cor: "#00ffcc" },
    { id: 2, nome: "Eduardo Malengo", cargo: "Gerente", local: "Rio de Janeiro, BR", ip: "177.45.12.89", tempo: "45m", img: "/eduardo.jpg", cor: "#ff00ff" },
    { id: 3, nome: "Lídia Monique", cargo: "Desenvolvedora", local: "Belo Horizonte, BR", ip: "191.23.45.67", tempo: "1h 30m", img: "/lidia.jpg", cor: "#ffaa00" },
    { id: 4, nome: "Murilo Rabetti", cargo: "Analista", local: "Curitiba, BR", ip: "200.15.88.12", tempo: "10m", img: "/murilo.jpg", cor: "#00aaff" },
  ];

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "#070b14", // Fundo azul muito escuro
      color: "#fff",
      padding: "40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: "hidden"
    }}>
      
      {/* Imagem de fundo sutil */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.05,
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
        
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

        {/* Título e Contador */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h1 style={{ fontSize: "3rem", fontWeight: "800", margin: 0, color: "#fff" }}>
              Usuários Ativos <span style={{ color: "#00ffcc" }}>📡</span>
            </h1>
            <p style={{ color: "#8892b0", fontSize: "1.1rem", marginTop: "10px" }}>
              Monitoramento em tempo real de quem está conectado.
            </p>
          </div>
          
          <div style={{
            background: "rgba(0, 255, 204, 0.1)",
            border: "1px solid #00ffcc",
            padding: "15px 30px",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "0 0 20px rgba(0, 255, 204, 0.2)"
          }}>
            <div style={{ 
              width: "15px", height: "15px", borderRadius: "50%", background: "#00ffcc", 
              boxShadow: "0 0 10px #00ffcc", animation: "pulse 2s infinite" 
            }} />
            <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#00ffcc" }}>
              {usuariosOnline.length} Online
            </span>
          </div>
        </div>

        {/* Grid de Usuários Ativos */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px"
        }}>
          {usuariosOnline.map((user) => (
            <div key={user.id} style={{
              background: "rgba(20, 30, 45, 0.7)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${user.cor}44`,
              borderRadius: "20px",
              padding: "25px",
              boxShadow: `0 10px 30px -10px ${user.cor}33`,
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              {/* Linha de brilho no topo */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: `linear-gradient(90deg, transparent, ${user.cor}, transparent)`
              }} />

              {/* Cabeçalho do Card */}
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ position: "relative" }}>
                  <img 
                    src={user.img} 
                    alt={user.nome} 
                    style={{ 
                      width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover",
                      border: `2px solid ${user.cor}`, padding: "2px"
                    }} 
                  />
                  {/* Bolinha verde de online */}
                  <div style={{
                    position: "absolute", bottom: "2px", right: "2px", width: "14px", height: "14px",
                    borderRadius: "50%", background: "#00ff00", border: "2px solid #1e1e1e",
                    boxShadow: "0 0 8px #00ff00"
                  }} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#fff" }}>{user.nome}</h3>
                  <p style={{ margin: "3px 0 0 0", color: user.cor, fontSize: "0.85rem", textTransform: "uppercase", fontWeight: "bold" }}>{user.cargo}</p>
                </div>
              </div>

              {/* Detalhes Técnicos */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "#8892b0" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>📍 Local:</span> <span style={{ color: "#e6f1ff" }}>{user.local}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>🌐 IP:</span> <span style={{ color: "#e6f1ff", fontFamily: "monospace" }}>{user.ip}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>⏱️ Sessão:</span> <span style={{ color: "#00ffcc", fontWeight: "bold" }}>{user.tempo}</span>
                </div>
              </div>

              {/* Botão de Ação */}
              <button style={{
                width: "100%", marginTop: "20px", padding: "10px",
                background: `rgba(${parseInt(user.cor.slice(1,3), 16)}, ${parseInt(user.cor.slice(3,5), 16)}, ${parseInt(user.cor.slice(5,7), 16)}, 0.1)`,
                border: `1px solid ${user.cor}66`,
                color: user.cor, borderRadius: "8px", cursor: "pointer",
                fontWeight: "bold", transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = `rgba(${parseInt(user.cor.slice(1,3), 16)}, ${parseInt(user.cor.slice(3,5), 16)}, ${parseInt(user.cor.slice(5,7), 16)}, 0.2)`}
              onMouseLeave={(e) => e.currentTarget.style.background = `rgba(${parseInt(user.cor.slice(1,3), 16)}, ${parseInt(user.cor.slice(3,5), 16)}, ${parseInt(user.cor.slice(5,7), 16)}, 0.1)`}
              >
                Enviar Mensagem
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}