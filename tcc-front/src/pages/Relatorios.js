// src/pages/Relatorios.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Relatorios() {
  const navigate = useNavigate();

  // Dados fictícios de métricas
  const metrics = [
    { titulo: "Receita Total", valor: "R$ 128.450", cor: "#00ffcc", icon: "💰", trend: "+12.5%" },
    { titulo: "Novos Usuários", valor: "1.248", cor: "#ff00ff", icon: "👥", trend: "+8.2%" },
    { titulo: "Taxa de Conversão", valor: "18.4%", cor: "#ffaa00", icon: "🎯", trend: "+2.1%" },
    { titulo: "Tickets Médios", valor: "R$ 450", cor: "#00aaff", icon: "🛒", trend: "-1.5%" },
  ];

  // Dados fictícios do gráfico de barras (Meses)
  const chartData = [
    { mes: "Jan", valor: 45 }, { mes: "Fev", valor: 52 }, { mes: "Mar", valor: 48 },
    { mes: "Abr", valor: 70 }, { mes: "Mai", valor: 65 }, { mes: "Jun", valor: 85 },
    { mes: "Jul", valor: 78 }, { mes: "Ago", valor: 95 }, { mes: "Set", valor: 88 },
    { mes: "Out", valor: 100 }, { mes: "Nov", valor: 92 }, { mes: "Dez", valor: 110 },
  ];

  const maxValor = Math.max(...chartData.map(d => d.valor));

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
      
      {/* Imagem de fundo sutil (Data/Tech) */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.08,
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
            Análise de desempenho e inteligência de negócios.
          </p>
        </div>

        {/* Grid de Métricas (Cards) */}
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
              flexDirection: "column",
              gap: "10px",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "1.8rem" }}>{metric.icon}</span>
                <span style={{ 
                  fontSize: "0.8rem", 
                  fontWeight: "bold", 
                  color: metric.trend.startsWith("+") ? "#00ffcc" : "#ff3366",
                  background: metric.trend.startsWith("+") ? "rgba(0, 255, 204, 0.1)" : "rgba(255, 51, 102, 0.1)",
                  padding: "4px 8px", 
                  borderRadius: "10px" 
                }}>
                  {metric.trend}
                </span>
              </div>
              <div>
                <p style={{ margin: 0, color: "#8892b0", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>{metric.titulo}</p>
                <h2 style={{ margin: "5px 0 0 0", fontSize: "1.8rem", color: metric.cor }}>{metric.valor}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Área do Gráfico Principal */}
        <div style={{
          background: "rgba(20, 30, 45, 0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0, 255, 204, 0.15)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          marginBottom: "40px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "10px" }}>
            <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#e6f1ff" }}>Crescimento Mensal</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ background: "rgba(0, 255, 204, 0.2)", color: "#00ffcc", padding: "5px 15px", borderRadius: "20px", fontSize: "0.8rem" }}>Receita</span>
            </div>
          </div>
          
          {/* Gráfico de Barras */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "300px", paddingBottom: "20px", borderBottom: "1px solid #333", overflowX: "auto" }}>
            {chartData.map((data, index) => (
              <div key={index} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", alignItems: "center", gap: "10px", minWidth: "40px" }}>
                <div style={{
                  width: "100%",
                  height: `${(data.valor / maxValor) * 100}%`,
                  background: "linear-gradient(to top, #00ffcc, #0066ff)",
                  borderRadius: "5px 5px 0 0",
                  boxShadow: "0 0 10px rgba(0, 255, 204, 0.3)",
                  transition: "height 1s ease",
                  position: "relative"
                }}>
                  {/* Tooltip fake no topo da barra */}
                  <div style={{
                    position: "absolute", top: "-25px", left: "50%", transform: "translateX(-50%)",
                    background: "#1e1e1e", color: "#fff", padding: "2px 6px", borderRadius: "5px",
                    fontSize: "0.7rem", opacity: 0.8, border: "1px solid #333"
                  }}>
                    {data.valor}
                  </div>
                </div>
                <span style={{ color: "#555", fontSize: "0.8rem" }}>{data.mes}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}