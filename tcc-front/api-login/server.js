// api-login/server.js
const express = require('express');
const cors = require('cors');
const app = express();

// CORS que permite TUDO (apenas para desenvolvimento)
app.use(cors({
  origin: '*',  // ← PERMITE QUALQUER ORIGEM
  credentials: true
}));

app.use(express.json());

const VALID_USER = {
  email: "admin@sistema.com",
  password: "Senha123@"
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  console.log('📱 Login do celular:', { email, ip: req.ip });
  
  if (email === VALID_USER.email && password === VALID_USER.password) {
    res.json({
      success: true,
      message: "Login pelo celular!",
      token: "token-celular-" + Date.now(),
      user: { email, name: "Admin Celular" }
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Credenciais inválidas no celular!"
    });
  }
});

// Rota ESPECÍFICA para testar conexão do celular
app.get('/test-mobile', (req, res) => {
  res.json({
    mobile: true,
    clientIp: req.ip,
    time: new Date().toISOString(),
    message: "Conexão celular OK!"
  });
});

const PORT = 3001;
const HOST = '0.0.0.0';  // ← ACEITA CONEXÕES EXTERNAS

app.listen(PORT, HOST, () => {
  console.log('='.repeat(60));
  console.log('📱 BACKEND PRONTO PARA CELULAR!');
  console.log(`📍 Host: ${HOST}`);
  console.log(`📡 Porta: ${PORT}`);
  console.log(`💻 Local: http://localhost:${PORT}`);
  console.log(`📱 Celular: http://[255.555.2.55.0]:${PORT}`);
  console.log('='.repeat(60));
  console.log('⚠️  Substitua [SEU-IP-AQUI] pelo IP do seu computador!');
  console.log('='.repeat(60));
});