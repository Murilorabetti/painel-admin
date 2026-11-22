// src/pages/Relatorios.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Relatorios() {
  const navigate = useNavigate();

  // Dados fictícios para os cards de métricas
  const metrics = [
    { titulo: "Vendas Totais", valor: "R$ 45.230", cor: "#00ffcc", icon: "💰" },
    { titulo: "Novos Clientes", valor: "128", cor: "#ff00ff", icon: "👥" },
    { titulo: "Taxa de Conversão", valor: "12.5%", cor: "#ffaa00", icon: "📈" },
    { titulo: "Tickets Abertos", valor: "14", cor: "#00aaff", icon: "🎫" }
  ];

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      background: "#070b14", // Fundo azul quase preto
      color: "#fff",
      padding: "40px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      overflow: "hidden"
    }}>
      
      {/* Imagem de fundo sutil (dados/tecnologia) */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.15, // Bem apagada
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

        {/* Título */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", margin: 0, color: "#fff" }}>
            Relatórios <span style={{ color: "#00ffcc" }}>📈</span>
          </h1>
          <p style={{ color: "#8892b0", fontSize: "1.1rem", marginTop: "10px" }}>
            Visualize o desempenho e as métricas do sistema em tempo real.
          </p>
        </div>

        {/* Grid de Cards de Métricas */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
          gap: "20px",
          marginBottom: "40px"
        }}>
          {metrics.map((metric, index) => (
            <div key={index} style={{
              background: "rgba(20, 30, 45, 0.7)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${metric.cor}44`,
              borderRadius: "15px",
              padding: "25px",
              boxShadow: `0 10px 30px -10px ${metric.cor}33`,
              display: "flex",
              alignItems: "center",
              gap: "20px",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ 
                fontSize: "2.5rem", 
                background: `rgba(${parseInt(metric.cor.slice(1,3), 16)}, ${parseInt(metric.cor.slice(3,5), 16)}, ${parseInt(metric.cor.slice(5,7), 16)}, 0.1)`, 
                padding: "15px", 
                borderRadius: "50%" 
              }}>
                {metric.icon}
              </div>
              <div>
                <p style={{ margin: 0, color: "#8892b0", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>{metric.titulo}</p>
                <h2 style={{ margin: "5px 0 0 0", fontSize: "1.8rem", color: metric.cor }}>{metric.valor}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Área de Gráfico Principal */}
        <div style={{
          background: "rgba(20, 30, 45, 0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 255, 204, 0.15)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
            <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#e6f1ff" }}>Desempenho Anual</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ background: "rgba(0, 255, 204, 0.2)", color: "#00ffcc", padding: "5px 15px", borderRadius: "20px", fontSize: "0.8rem" }}>Vendas</span>
              <span style={{ background: "rgba(255, 0, 255, 0.2)", color: "#ff00ff", padding: "5px 15px", borderRadius: "20px", fontSize: "0.8rem" }}>Acessos</span>
            </div>
          </div>
          
          {/* Gráfico de Barras Fake (Animado via CSS) */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "15px", height: "250px", paddingBottom: "10px", borderBottom: "1px solid #333" }}>
            {[30, 50, 40, 70, 60, 90, 80, 100, 85, 95, 75, 65].map((height, index) => (
              <div key={index} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", gap: "5px" }}>
                {/* Barra 1 */}
                <div style={{
                  height: `${height}%`,
                  background: "linear-gradient(to top, #00ffcc, #0066ff)",
                  borderRadius: "5px 5px 0 0",
                  boxShadow: "0 0 10px rgba(0, 255, 204, 0.3)",
                  transition: "height 1s ease"
                }} />
                {/* Barra 2 (Sobreposta) */}
                <div style={{
                  height: `${height * 0.6}%`,
                  background: "linear-gradient(to top, #ff00ff, #9900ff)",
                  borderRadius: "5px 5px 0 0",
                  boxShadow: "0 0 10px rgba(255, 0, 255, 0.3)",
                  transition: "height 1s ease"
                }} />
              </div>
            ))}
          </div>
          
          {/* Eixo X (Meses) */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", color: "#555", fontSize: "0.8rem" }}>
            <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
            <span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span>
          </div>
        </div>

      </div>
    </div>
  );
}