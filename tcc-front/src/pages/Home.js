// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    const btn = document.querySelector('.logout-btn');
    if (btn) btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/login");
    }, 200);
  };

  const cardHover = (e, isHovering) => {
    if (isMobile) return; 

    const card = e.currentTarget;
    if (isHovering) {
      card.style.transform = 'translateY(-10px) scale(1.03)';
      card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.5)'; 
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    }
  };

  const pulseAnimation = {
    animation: 'pulse 2s infinite',
    '@keyframes pulse': {
      '0%': { boxShadow: '0 0 0 0 rgba(52, 152, 219, 0.7)' },
      '70%': { boxShadow: '0 0 0 15px rgba(52, 152, 219, 0)' },
      '100%': { boxShadow: '0 0 0 0 rgba(52, 152, 219, 0)' }
    }
  };

  // ESTILOS DINÂMICOS (DARK MODE)
  const styles = {
    container: {
      padding: isMobile ? "15px" : "40px 20px", 
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      
      // PLANO DE FUNDO DA PÁGINA (sala.jpg na pasta public)
      backgroundImage: "url('/sala.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      
      color: "#ffffff", 
      minHeight: "100vh",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease'
    },
    header: {
      background: "linear-gradient(90deg, rgba(30, 30, 47, 0.8) 0%, rgba(42, 27, 56, 0.8) 100%)",
      backdropFilter: "blur(10px)", 
      color: "white",
      padding: isMobile ? "20px" : "40px", 
      borderRadius: "20px",
      marginBottom: isMobile ? "20px" : "40px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      position: "relative",
      overflow: "hidden",
      border: "1px solid #333"
    },
    headerBg: {
      position: "absolute",
      top: "-50%",
      right: "-50%",
      width: "200%",
      height: "200%",
      background: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      opacity: "0.3",
      animation: "float 20s linear infinite",
      '@keyframes float': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    },
    title: {
      fontSize: isMobile ? "2rem" : "3rem", 
      marginBottom: "10px",
      fontWeight: "800",
      background: "linear-gradient(45deg, #fff, #aaa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
    },
    subtitle: {
      fontSize: isMobile ? "1rem" : "1.3rem",
      opacity: "0.7",
      fontWeight: "300"
    },
    // CARD DO CLIMA (AGORA COM A IMAGEM DA SALA)
    weatherCard: {
      backgroundImage: "url('/sala.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: isMobile ? "250px" : "400px", 
      color: "white",
      padding: "30px",
      borderRadius: "20px",
      marginBottom: isMobile ? "20px" : "40px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      position: "relative",
      overflow: "hidden",
      border: "1px solid #333",
      ...pulseAnimation
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: isMobile ? "15px" : "30px",
      marginBottom: "50px"
    },
    card: {
      backgroundColor: "rgba(30, 30, 30, 0.6)", 
      backdropFilter: "blur(8px)", 
      padding: isMobile ? "20px" : "30px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      cursor: "pointer",
      border: "2px solid transparent",
      position: "relative",
      overflow: "hidden"
    },
    cardHoverEffect: {
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
        transition: 'left 0.7s'
      },
      '&:hover:before': {
        left: '100%'
      }
    },
    cardTitle: {
      fontSize: isMobile ? "1.2rem" : "1.5rem",
      color: "#ffffff",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontWeight: "600"
    },
    cardIcon: {
      fontSize: isMobile ? "1.5rem" : "2rem",
      transition: "transform 0.3s ease"
    },
    cardContent: {
      color: "#b0b0b0",
      lineHeight: "1.6",
      fontSize: isMobile ? "0.9rem" : "1rem"
    },
    logoutButton: {
      padding: isMobile ? "12px 30px" : "16px 40px",
      background: "linear-gradient(45deg, #ff6b6b, #ee5a52)",
      color: "white",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "700",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 20px rgba(255, 107, 107, 0.3)",
      letterSpacing: "1px",
      position: "relative",
      overflow: "hidden",
      '&:hover': {
        transform: "translateY(-3px)",
        boxShadow: "0 12px 25px rgba(255, 107, 107, 0.4)",
        background: "linear-gradient(45deg, #ff5252, #ff4081)"
      }
    },
    footer: {
      textAlign: "center",
      marginTop: "50px",
      color: "#888888",
      fontSize: "0.9rem",
      padding: "20px",
      borderTop: "1px solid #333333"
    },
    particle: {
      position: 'absolute',
      width: '3px',
      height: '3px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      animation: 'fall 5s linear infinite',
      '@keyframes fall': {
        '0%': {
          transform: 'translateY(-100px)',
          opacity: '1'
        },
        '100%': {
          transform: 'translateY(100vh)',
          opacity: '0'
        }
      }
    }
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`
  }));

  return (
    <div style={styles.container}>
      {particles.map(p => (
        <div 
          key={p.id}
          style={{
            ...styles.particle,
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration
          }}
        />
      ))}

      <div style={styles.header}>
        <div style={styles.headerBg} />
        <h1 style={styles.title}>🚀 Sistema Logado</h1>
        <p style={styles.subtitle}>Bem-vindo ao painel administrativo premium!</p>
      </div>

      {/* Cartão do tempo (Agora apenas a imagem da sala futurista) */}
      <div style={styles.weatherCard}></div>

      <div style={styles.cardsContainer}>
        {[
          { icon: "📊", title: "Painel de Controle", desc: "Acesse gráficos e relatórios detalhados do sistema." },
          { icon: "👥", title: "Usuários", desc: "Gerencie os usuários do sistema e suas permissões." },
          { icon: "⚙️", title: "Configurações", desc: "Configure as preferências do sistema e notificações." },
          { icon: "📈", title: "Relatórios", desc: "Gere relatórios personalizados e exporte dados." },
          { icon: "🔔", title: "Notificações", desc: "Veja todas as notificações e alertas do sistema." },
          { icon: "🛡️", title: "Segurança", desc: "Configure segurança, backups e logs do sistema." }
        ].map((card, index) => (
          <div 
            key={index}
            style={{
              ...styles.card,
              ...styles.cardHoverEffect,
              borderColor: `hsl(${index * 60}, 70%, 60%)`,
              borderWidth: '3px',
              animationDelay: `${index * 0.1}s`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease ${index * 0.1}s`
            }}
            onMouseEnter={(e) => {
              cardHover(e, true);
              if(!isMobile) e.currentTarget.querySelector('.card-icon').style.transform = 'rotate(15deg) scale(1.2)';
            }}
            onMouseLeave={(e) => {
              cardHover(e, false);
              if(!isMobile) e.currentTarget.querySelector('.card-icon').style.transform = 'rotate(0) scale(1)';
            }}
            onClick={() => {
              if (card.title === "Painel de Controle") {
                navigate("/painel");
              } else if (card.title === "Usuários") {
                navigate("/usuarios");
              } else if (card.title === "Configurações") {
                navigate("/configuracoes");
              } else if (card.title === "Relatórios") { // <-- NOVA NAVEGAÇÃO AQUI
                navigate("/relatorios");
              } else {
                alert(`Abrindo ${card.title}`);
              }
            }}
          >
            <h3 style={styles.cardTitle}>
              <span className="card-icon" style={styles.cardIcon}>{card.icon}</span>
              {card.title}
            </h3>
            <p style={styles.cardContent}>{card.description || card.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button 
          onClick={handleLogout}
          className="logout-btn"
          style={styles.logoutButton}
        >
          🔐 Sair do Sistema
        </button>
      </div>

      <div style={styles.footer}>
        <p>© 2024 Sistema Administrativo | Último acesso: Hoje às 12:30</p>
      </div>
    </div>
  );
}