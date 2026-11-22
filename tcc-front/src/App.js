// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importando as suas páginas
import Home from "./pages/Home";
import Login from "./pages/login"; 
import Painel from "./pages/Painel"; 
import Register from "./pages/register";
import Usuarios from "./pages/Usuarios"; 
import Configuracoes from "./pages/Configuracoes";
import Relatorios from "./pages/Relatorios"; // <-- NOVO IMPORT
import Notificacoes from "./pages/Notificacoes"; // <-- Importe aqui

// ... dentro das Routes:
<Route path="/notificacoes" element={<Notificacoes />} /> {/* <-- Adicione essa linha */}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/relatorios" element={<Relatorios />} /> {/* <-- NOVA ROTA */}
      </Routes>
    </BrowserRouter>
  );
}