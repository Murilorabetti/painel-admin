// src/pages/login.js
import React, { useState } from "react";
import { login } from "../services/authService";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    // Validação básica no frontend
    if (!email || !password) {
      setError("Por favor, preencha todos os campos!");
      return;
    }
    
    // Validação de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um email válido!");
      return;
    }
    
    setLoading(true);
    
    try {
      console.log("🔐 Tentando login...");
      const data = await login(email, password);
      
      console.log("✅ Login bem-sucedido!");
      setSuccess("Login realizado com sucesso! Redirecionando...");
      
      // Salvar token e dados do usuário
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      
      // Redirecionar após 1 segundo
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
      
    } catch (error) {
      console.error("❌ Erro no login:", error);
      
      if (error.response?.status === 401) {
        setError("Credenciais inválidas! Use: admin@sistema.com / Senha123@");
      } else if (error.response?.status === 400) {
        setError(error.response.data.message || "Dados inválidos!");
      } else if (error.code === 'ERR_NETWORK') {
        setError("Servidor não respondendo. Verifique o backend.");
      } else {
        setError("Erro ao conectar com o servidor.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        width: "100%",
        maxWidth: "450px"
      }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{
            color: "#2c3e50",
            marginBottom: "10px",
            fontSize: "2.5rem",
            fontWeight: "700"
          }}>
            🔐 Sistema
          </h1>
          <p style={{ color: "#7f8c8d", fontSize: "1.1rem" }}>
            Acesso restrito aos administradores
          </p>
        </div>
        
        {error && (
          <div style={{
            backgroundColor: "#ffe6e6",
            color: "#d32f2f",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
            borderLeft: "4px solid #d32f2f",
            animation: "shake 0.5s ease-in-out"
          }}>
            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>⚠️ Acesso Negado</div>
            {error}
          </div>
        )}
        
        {success && (
          <div style={{
            backgroundColor: "#e6ffe6",
            color: "#2e7d32",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
            borderLeft: "4px solid #2e7d32"
          }}>
            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>✅ Sucesso!</div>
            {success}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#2c3e50"
            }}>
              Email
            </label>
            <input
              type="email"
              placeholder="admin@sistema.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              style={{
                width: "100%",
                padding: "15px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
                e.target.style.boxShadow = "none";
              }}
              required
            />
          </div>
          
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#2c3e50"
            }}>
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              style={{
                width: "100%",
                padding: "15px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxSizing: "border-box"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
                e.target.style.boxShadow = "none";
              }}
              required
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "18px",
              backgroundColor: loading ? "#ccc" : "#667eea",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.backgroundColor = "#5a67d8";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 30px rgba(102, 126, 234, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.backgroundColor = "#667eea";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
              }
            }}
          >
            {loading ? (
              <>
                <span style={{ marginRight: "10px" }}>⏳</span>
                Verificando...
              </>
            ) : (
              <>
                <span style={{ marginRight: "10px" }}>🔑</span>
                Acessar Sistema
              </>
            )}
          </button>
        </form>
        
        <div style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          border: "1px solid #e0e0e0"
        }}>
          <div style={{
            fontWeight: "600",
            color: "#2c3e50",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span>🔒</span> Credenciais de Acesso
          </div>
          <div style={{ color: "#5d6d7e", fontSize: "0.95rem" }}>
            <p><strong>Email:</strong> admin@sistema.com</p>
            <p><strong>Senha:</strong> Senha123@</p>
            <p style={{ fontSize: "0.85rem", color: "#95a5a6", marginTop: "10px" }}>
              ⚠️ Apenas este usuário tem acesso ao sistema
            </p>
          </div>
        </div>
        
        <div style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#95a5a6",
          fontSize: "0.9rem"
        }}>
          <p>Sistema Administrativo © 2024</p>
        </div>
      </div>
      
      {/* Adiciona estilo de animação shake para erro */}
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
        `}
      </style>
    </div>
  );
}