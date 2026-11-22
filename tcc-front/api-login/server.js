// api-login/server.js
const express = require('express');
const cors = require('cors');
const app = express();

// CORS liberado para desenvolvimento e produção (permite localhost, Vercel, etc.)
app.use(cors()); 

app.use(express.json());

const VALID_USER = {
  email: "admin@sistema.com",
  password: "Senha123@"
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  console.log('📱 Tentativa de login:', { email, ip: req.ip });
  
  if (email === VALID_USER.email && password === VALID_USER.password) {
    res.json({
      success: true,
      message: "Login realizado com sucesso!",
      token: "token-sistema-" + Date.now(),
      user: { email, name: "Admin" }
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Credenciais inválidas!"
    });
  }
});

// Rota ESPECÍFICA para testar conexão
app.get('/test-mobile', (req, res) => {
  res.json({
    mobile: true,
    clientIp: req.ip,
    time: new Date().toISOString(),
    message: "Conexão OK!"
  });
});

// O Render define a porta automaticamente na variável PORT. 
// Se estiver rodando no seu PC, ele usa a 3001.
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 BACKEND RODANDO!');
  console.log(`📡 Porta: ${PORT}`);
  console.log(`💻 Local: http://localhost:${PORT}`);
  console.log('='.repeat(50));
});