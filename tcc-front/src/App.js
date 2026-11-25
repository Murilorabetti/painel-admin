// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login"; 
import Painel from "./pages/Painel"; 
import Register from "./pages/register";
import Usuarios from "./pages/Usuarios"; 
import Configuracoes from "./pages/Configuracoes";
import Relatorios from "./pages/Relatorios"; 
import Notificacoes from "./pages/Notificacoes"; 
import Seguranca from "./pages/Seguranca"; 
import UsuariosAtivos from "./pages/UsuariosAtivos";
import Backups from "./pages/Backups"; // <-- NOVO IMPORT

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
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/usuarios-ativos" element={<UsuariosAtivos />} />
        <Route path="/backups" element={<Backups />} /> {/* <-- NOVA ROTA */}
      </Routes>
    </BrowserRouter>
  );
}