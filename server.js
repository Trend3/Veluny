const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.static('public'));

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado com sucesso!'))
  .catch((err) => {
    console.error('❌ Erro ao conectar ao MongoDB:', err);
    process.exit(1);
  });

// Rotas da API
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/config', require('./routes/config'));

// Sincronização em tempo real com Socket.io
io.on('connection', (socket) => {
  console.log('👤 Novo cliente conectado:', socket.id);

  socket.on('disconnect', () => {
    console.log('👤 Cliente desconectado:', socket.id);
  });

  // Emitir quando novo pedido é criado
  socket.on('new_order', (data) => {
    io.emit('order_update', data);
  });

  // Emitir quando novo produto é adicionado
  socket.on('new_product', (data) => {
    io.emit('product_update', data);
  });
});

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    mensagem: '🎉 Bem-vindo ao backend VELUNY!',
    versao: '1.0.0',
    status: 'online',
    endpoints: {
      loja: '/index.html',
      admin: '/admin.html',
      api: '/api'
    }
  });
});

// Rota de health check (para Railway)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Tratamento de erro 404
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║        🚀 VELUNY SERVIDOR ATIVO        ║
╠════════════════════════════════════════╣
║ 🌐 URL Principal: http://localhost:${PORT}
║ 🏪 Loja: http://localhost:${PORT}/index.html
║ 🔧 Admin: http://localhost:${PORT}/admin.html
║ 📡 API: http://localhost:${PORT}/api
║ 💚 Health: http://localhost:${PORT}/health
╚════════════════════════════════════════╝
  `);
});
