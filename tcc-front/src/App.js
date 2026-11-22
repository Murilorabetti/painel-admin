// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importando as suas páginas
import Home from "./pages/Home";
import Login from "./pages/login"; 
import Painel from "./pages/Painel"; 
import Register from "./pages/register";
import Usuarios from "./pages/Usuarios"; 
import Configuracoes from "./pages/Configuracoes"; // <-- NOVO IMPORT AQUI

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
        
        {/* NOVA ROTA AQUI */}
        <Route path="/configuracoes" element={<Configuracoes />} /> 
      </Routes>
    </BrowserRouter>
  );
}