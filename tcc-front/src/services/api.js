// src/services/api.js
import axios from 'axios';

// Define a URL do backend
// Se estiver acessando local (localhost), usa a porta 3001
// Se estiver acessando de fora (pelo link da Cloudflare), usa o link público
const baseURL = window.location.hostname.includes('localhost') 
    ? 'http://localhost:3001'
  : 'https://painel-admin-2701.onrender.com';
console.log(`🔌 Conectando em: ${baseURL}`);

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;