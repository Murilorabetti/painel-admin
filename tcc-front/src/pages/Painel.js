// src/pages/Painel.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Painel() {
  const navigate = useNavigate();

  // Array com os novos blocos (para não precisar repetir código HTML)
  const novosBlocos = [
    { titulo: "Usuários Ativos", imagem: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop", cor: "rgba(0, 255, 255, 0.5)" },
    { titulo: "Relatórios", imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop", cor: "rgba(255, 0, 255, 0.5)" },
    { titulo: "Segurança", imagem: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format&fit=crop", cor: "rgba(255, 165, 0, 0.5)" },
    { titulo: "Configurações", imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop", cor: "rgba(0, 255, 0, 0.5)" },
    { titulo: "Notificações", imagem: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop", cor: "rgba(255, 0, 0, 0.5)" },
    { titulo: "Backups", imagem: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop", cor: "rgba(255, 255, 0, 0.5)" }
  ];

  return (
    <div style={{ 
      position: "relative", 
      minHeight: "100vh", 
      backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      overflow: "hidden" 
    }}>
      
      {/* Camada escura de fundo */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0, 0, 0, 0.6)",
        zIndex: 1
      }} />

      {/* Conteúdo da página */}
      <div style={{ position: "relative", zIndex: 2, padding: "40px", color: "#fff" }}>
        
        <div style={{ width: "100%", maxWidth: "800px", textAlign: "left" }}>
          <button 
            onClick={() => navigate("/home")}
            style={{ 
              background: "rgba(0,0,0,0.5)", 
              color: "#fff", 
              border: "1px solid #fff", 
              padding: "10px 20px", 
              borderRadius: "5px", 
              cursor: "pointer",
              marginBottom: "20px",
              fontFamily: "monospace",
              backdropFilter: "blur(5px)"
            }}
          >
            &lt; Voltar para Home
          </button>

          <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Painel de Controle 🔥</h1>
          <p style={{ color: "#ccc", marginBottom: "40px" }}>Bem-vindo ao núcleo do sistema.</p>
        </div>

        {/* CONTAINER DA GRADE (Acessos + 6 Novos Blocos) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          
          {/* 1. Bloco de Acessos (O original) */}
          <div style={{ 
            padding: "20px", 
            borderRadius: "15px", 
            background: "rgba(10, 25, 47, 0.85)", 
            border: "1px solid rgba(0, 150, 255, 0.5)", 
            boxShadow: "0 0 20px rgba(0, 150, 255, 0.3)", 
            backdropFilter: "blur(8px)"
          }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "15px", color: "#fff" }}>Acessos do Sistema</h2>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "120px", justifyContent: "center" }}>
              {[40, 70, 50, 90, 60, 100, 80].map((height, index) => (
                <div key={index} style={{
                  width: "25px",
                  height: `${height}%`,
                  background: "linear-gradient(to top, #0F0, #00F)",
                  borderRadius: "3px 3px 0 0",
                  transition: "height 1s ease",
                  boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)"
                }} />
              ))}
            </div>
          </div>

          {/* 2. Os 6 Novos Blocos */}
          {novosBlocos.map((bloco, index) => (
            <div key={index} style={{
              height: "180px",
              borderRadius: "15px",
              position: "relative",
              overflow: "hidden",
              backgroundImage: `url('${bloco.imagem}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: `1px solid ${bloco.cor}`,
              boxShadow: `0 0 15px ${bloco.cor}`,
              cursor: "pointer",
              transition: "transform 0.3s ease",
              backdropFilter: "blur(5px)"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              {/* Overlay escuro para o texto ficar legível */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 1
              }} />
              
              {/* Título do Card */}
              <h3 style={{
                position: "absolute",
                bottom: "15px",
                left: "20px",
                margin: 0,
                zIndex: 2,
                fontSize: "1.2rem",
                fontWeight: "bold",
                textShadow: "1px 1px 3px rgba(0,0,0,0.8)"
              }}>
                {bloco.titulo}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}