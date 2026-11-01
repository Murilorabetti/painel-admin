// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Animação de entrada
    setIsVisible(true);
  }, []);

  const handleLogout = () => {
    // Animação de clique no botão
    const btn = document.querySelector('.logout-btn');
    btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/login");
    }, 200);
  };

  const cardHover = (e, isHovering) => {
    const card = e.currentTarget;
    if (isHovering) {
      card.style.transform = 'translateY(-10px) scale(1.03)';
      card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
    } else {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
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

  const styles = {
    container: {
      padding: "40px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      minHeight: "100vh",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease'
    },
    header: {
      background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "40px",
      borderRadius: "20px",
      marginBottom: "40px",
      boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
      position: "relative",
      overflow: "hidden"
    },
    headerBg: {
      position: "absolute",
      top: "-50%",
      right: "-50%",
      width: "200%",
      height: "200%",
      background: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      opacity: "0.3",
      animation: "float 20s linear infinite",
      '@keyframes float': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    },
    title: {
      fontSize: "3rem",
      marginBottom: "10px",
      fontWeight: "800",
      background: "linear-gradient(45deg, #fff, #f0f0f0)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
    },
    subtitle: {
      fontSize: "1.3rem",
      opacity: "0.9",
      fontWeight: "300"
    },
    weatherCard: {
      background: "linear-gradient(135deg, #43cea2, #185a9d)",
      color: "white",
      padding: "30px",
      borderRadius: "20px",
      marginBottom: "40px",
      boxShadow: "0 10px 25px rgba(67, 206, 162, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
      ...pulseAnimation
    },
    weatherIcon: {
      fontSize: "4rem",
      animation: "floatIcon 3s ease-in-out infinite",
      '@keyframes floatIcon': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' }
      }
    },
    weatherInfo: {
      textAlign: "right"
    },
    weatherTemp: {
      fontSize: "3.5rem",
      fontWeight: "800",
      margin: "5px 0",
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
    },
    weatherDesc: {
      fontSize: "1.3rem",
      opacity: "0.9",
      fontWeight: "300"
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      marginBottom: "50px"
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
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
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        transition: 'left 0.7s'
      },
      '&:hover:before': {
        left: '100%'
      }
    },
    cardTitle: {
      fontSize: "1.5rem",
      color: "#2c3e50",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontWeight: "600"
    },
    cardIcon: {
      fontSize: "2rem",
      transition: "transform 0.3s ease"
    },
    cardContent: {
      color: "#5d6d7e",
      lineHeight: "1.6",
      fontSize: "1rem"
    },
    logoutButton: {
      padding: "16px 40px",
      background: "linear-gradient(45deg, #ff6b6b, #ee5a52)",
      color: "white",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      fontSize: "1.1rem",
      fontWeight: "700",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 20px rgba(255, 107, 107, 0.4)",
      letterSpacing: "1px",
      position: "relative",
      overflow: "hidden",
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '5px',
        height: '5px',
        background: 'rgba(255, 255, 255, 0.5)',
        opacity: '0',
        borderRadius: '100%',
        transform: 'scale(1, 1) translate(-50%)',
        transformOrigin: '50% 50%'
      },
      '&:focus:not(:active)::after': {
        animation: 'ripple 1s ease-out'
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(0, 0)',
          opacity: '.5'
        },
        '100%': {
          transform: 'scale(20, 20)',
          opacity: '0'
        }
      },
      '&:hover': {
        transform: "translateY(-3px)",
        boxShadow: "0 12px 25px rgba(255, 107, 107, 0.5)",
        background: "linear-gradient(45deg, #ff5252, #ff4081)"
      },
      '&:active': {
        transform: "translateY(-1px)",
        boxShadow: "0 5px 15px rgba(255, 107, 107, 0.4)"
      }
    },
    footer: {
      textAlign: "center",
      marginTop: "50px",
      color: "#7f8c8d",
      fontSize: "0.9rem",
      padding: "20px",
      borderTop: "1px solid #e0e0e0"
    },
    particle: {
      position: 'absolute',
      width: '3px',
      height: '3px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
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

  // Gerar partículas para background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`
  }));

  return (
    <div style={styles.container}>
      {/* Partículas de background */}
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

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerBg} />
        <h1 style={styles.title}>🚀 Sistema Logado</h1>
        <p style={styles.subtitle}>Bem-vindo ao painel administrativo premium!</p>
      </div>

      {/* Cartão do tempo */}
      <div style={styles.weatherCard}>
        <div style={styles.weatherIcon}>⛅</div>
        <div style={styles.weatherInfo}>
          <div style={styles.weatherTemp}>25°C</div>
          <div style={styles.weatherDesc}>Pred. nublado</div>
        </div>
      </div>

      {/* Cards de funcionalidades */}
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
              e.currentTarget.querySelector('.card-icon').style.transform = 'rotate(15deg) scale(1.2)';
            }}
            onMouseLeave={(e) => {
              cardHover(e, false);
              e.currentTarget.querySelector('.card-icon').style.transform = 'rotate(0) scale(1)';
            }}
            onClick={() => alert(`Abrindo ${card.title}`)}
          >
            <h3 style={styles.cardTitle}>
              <span className="card-icon" style={styles.cardIcon}>{card.icon}</span>
              {card.title}
            </h3>
            <p style={styles.cardContent}>{card.description || card.desc}</p>
          </div>
        ))}
      </div>

      {/* Botão de logout */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button 
          onClick={handleLogout}
          className="logout-btn"
          style={styles.logoutButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(45deg, #ff5252, #ff4081)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(45deg, #ff6b6b, #ee5a52)";
          }}
        >
          🔐 Sair do Sistema
        </button>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>© 2024 Sistema Administrativo | Último acesso: Hoje às 12:30</p>
      </div>
    </div>
  );
}