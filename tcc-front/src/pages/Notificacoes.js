// src/pages/Notificacoes.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Notificacoes() {
  const navigate = useNavigate();

  // Dados fictícios das notificações
  const notificacoes = [
    {
      id: 1,
      tipo: "sucesso",
      titulo: "Novo usuário cadastrado",
      mensagem: "Adriana Rabetti acabou de se registrar no sistema.",
      tempo: "Há 5 minutos",
      icone: "✅",
      cor: "#00ffcc" // Ciano
    },
    {
      id: 2,
      tipo: "alerta",
      titulo: "Tentativa de acesso suspeita",
      mensagem: "Múltiplas tentativas de login falhas detectadas no IP 192.168.1.55.",
      tempo: "Há 20 minutos",
      icone: "⚠️",
      cor: "#ffaa00" // Laranja
    },
    {
      id: 3,
      tipo: "info",
      titulo: "Backup concluído",
      mensagem: "O backup automático dos dados foi finalizado com sucesso.",
      tempo: "Há 2 horas",
      icone: "💾",
      cor: "#00aaff" // Azul
    },
    {
      id: 4,
      tipo: "sucesso",
      titulo: "Relatório gerado",
      mensagem: "O relatório mensal de vendas está pronto para download.",
      tempo: "Há 5 horas",
      icone: "📊",
      cor: "#00ffcc"
    },
    {
      id: 5,
      tipo: "alerta",
      titulo: "Uso de CPU elevado",
      mensagem: "O servidor atingiu 90% de uso de CPU. Verifique os processos.",
      tempo: "Ontem às 14:30",
      icone: "🔥",
      cor: "#ff3366" // Rosa/Vermelho
    }
  ];

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "#0b0f19", // Fundo escuro profundo
      color: "#fff",
      padding: "40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: "hidden"
    }}>
      
      {/* Imagem de fundo sutil (código/tecnologia) */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.05, // Bem apagada
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
        
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
        <div style={{ marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: "3rem", fontWeight: "800", margin: 0, color: "#fff" }}>
              Notificações <span style={{ color: "#00ffcc" }}>🔔</span>
            </h1>
            <p style={{ color: "#8892b0", fontSize: "1.1rem", marginTop: "10px" }}>
              Fique por dentro de tudo o que acontece no sistema.
            </p>
          </div>
          <div style={{
            background: "#ff3366",
            color: "#fff",
            padding: "5px 15px",
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "0.9rem",
            boxShadow: "0 0 15px rgba(255, 51, 102, 0.5)"
          }}>
            5 Novas
          </div>
        </div>

        {/* Lista de Notificações */}
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {notificacoes.map((notif) => (
            <div key={notif.id} style={{
              background: "rgba(20, 30, 45, 0.6)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderLeft: `4px solid ${notif.cor}`, // Borda colorida na esquerda
              borderRadius: "12px",
              padding: "20px",
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              transition: "transform 0.2s ease, background 0.2s ease",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(10px)";
              e.currentTarget.style.background = "rgba(30, 45, 65, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.background = "rgba(20, 30, 45, 0.6)";
            }}
            >
              {/* Ícone */}
              <div style={{
                fontSize: "1.5rem",
                background: `rgba(${parseInt(notif.cor.slice(1,3), 16)}, ${parseInt(notif.cor.slice(3,5), 16)}, ${parseInt(notif.cor.slice(5,7), 16)}, 0.1)`,
                padding: "12px",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: notif.cor
              }}>
                {notif.icone}
              </div>

              {/* Conteúdo */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                  <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#e6f1ff" }}>{notif.titulo}</h3>
                  <span style={{ fontSize: "0.8rem", color: "#555" }}>{notif.tempo}</span>
                </div>
                <p style={{ margin: 0, color: "#8892b0", fontSize: "0.95rem", lineHeight: "1.5" }}>
                  {notif.mensagem}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}