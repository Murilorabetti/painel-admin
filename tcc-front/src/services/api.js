import axios from 'axios';

const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://meu-backend-login.onrender.com';

console.log(`🔗 Conectando em: ${baseURL}`);

const api = axios.create({
  baseURL: baseURL,
  timeout: 60000, // Aumentei para 60 segundos para dar tempo do Render acordar
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;