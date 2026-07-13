# 🛍️ VELUNY - Boutique de Moda 🌟

**Sistema profissional de e-commerce com loja online e painel administrativo integrados.**

---

## ✨ Features Principais

- ✅ **Loja online** com produtos e carrinho integrado
- ✅ **Painel administrativo** completo para gerenciar tudo
- ✅ **Gerenciamento de produtos, categorias e pedidos**
- ✅ **Sincronização em tempo real** com WebSocket
- ✅ **Sistema de pedidos** com integração Pix/WhatsApp
- ✅ **Autenticação segura** com JWT
- ✅ **Banco de dados MongoDB** (nuvem)
- ✅ **API REST** completa e documentada
- ✅ **Responsivo** em mobile, tablet e desktop
- ✅ **Pronto para produção**

---

## 🚀 Deploy Automático no Railway

### 1️⃣ Acesse Railway
```
https://railway.app
```

### 2️⃣ Login com GitHub
- Clique em "Start Project"
- Escolha "Deploy from GitHub"

### 3️⃣ Selecione o Repositório
```
Trend3/veluny
```

### 4️⃣ Configure as Variáveis de Ambiente

No Railway, vá em **"Variables"** e adicione:

```env
MONGODB_URI=mongodb+srv://piressolucoesdigitais65_db_user:Ma0802@cluster0.f6ldwo1.mongodb.net/veluny?retryWrites=true&w=majority
JWT_SECRET=veluny_super_secret_key_2024_secure_password_here_change_in_production
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://seu-app.railway.app
```

### 5️⃣ Clique em "Deploy"

✅ **Seu site estará online em minutos!**

---

## 📁 Estrutura do Projeto

```
veluny/
├── server.js                 # Servidor principal
├── Procfile                  # Configuração Railway
├── .env                      # Variáveis de ambiente
├── package.json              # Dependências
├── config/
│   └── database.js          # Conexão MongoDB
├── models/                   # Schemas MongoDB
│   ├── Admin.js
│   ├── Product.js
│   ├── Order.js
│   ├── Message.js
│   └── StoreConfig.js
├── routes/                   # API Endpoints
│   ├── auth.js              # Autenticação
│   ├── products.js          # Gerenciar produtos
│   ├── orders.js            # Gerenciar pedidos
│   ├── messages.js          # Gerenciar mensagens
│   └── config.js            # Configurações da loja
├── middleware/
│   └── auth.js              # Middleware JWT
└── public/                   # Frontend
    ├── index.html           # Loja
    └── admin.html           # Painel Administrativo
```

---

## 🔐 API Endpoints

### 🔑 Autenticação
- `POST /api/auth/register` - Registrar admin
- `POST /api/auth/login` - Login admin

### 👗 Produtos
- `GET /api/products` - Listar produtos
- `POST /api/products` - Criar produto (admin)
- `PUT /api/products/:id` - Editar produto (admin)
- `DELETE /api/products/:id` - Deletar produto (admin)

### 📦 Pedidos
- `GET /api/orders` - Listar pedidos (admin)
- `POST /api/orders` - Criar pedido
- `PUT /api/orders/:id` - Atualizar status (admin)
- `DELETE /api/orders/:id` - Deletar pedido (admin)

### 💬 Mensagens
- `GET /api/messages` - Listar mensagens (admin)
- `POST /api/messages` - Enviar mensagem
- `DELETE /api/messages/:id` - Deletar mensagem (admin)

### ⚙️ Configurações
- `GET /api/config` - Obter configurações
- `PUT /api/config` - Atualizar configurações (admin)

---

## 💻 Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- MongoDB Atlas account
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Trend3/veluny.git
cd veluny

# Instale as dependências
npm install

# Configure o .env
cp .env.example .env
# Edite com suas credenciais

# Inicie o servidor
npm start
```

### Acessos
- **Loja:** http://localhost:5000/index.html
- **Painel:** http://localhost:5000/admin.html
- **API:** http://localhost:5000/api

---

## 🌐 URLs em Produção

Após deploy no Railway:

- **Loja:** `https://seu-app.railway.app/index.html`
- **Painel:** `https://seu-app.railway.app/admin.html`
- **API:** `https://seu-app.railway.app/api`
- **Health:** `https://seu-app.railway.app/health`

---

## 🔐 Primeiro Login

Registre seu admin via API:

```bash
curl -X POST https://seu-app.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "seu_email@gmail.com",
    "password": "sua_senha_segura"
  }'
```

Ou use o formulário no painel admin.

---

## 🛠️ Tecnologias

- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas
- **Autenticação:** JWT
- **Sync em Tempo Real:** Socket.io
- **Deploy:** Railway
- **Frontend:** HTML5 + CSS3 + Vanilla JS

---

## 📊 Dados Sincronizados em Tempo Real

- 📦 Novos pedidos aparecem automaticamente no painel
- 👗 Novos produtos são atualizados em tempo real na loja
- 💬 Mensagens de contato são recebidas instantaneamente
- ⚙️ Mudanças nas configurações se refletem na loja

---

## 📧 Suporte

Para dúvidas ou sugestões:
**Email:** antonio.763p@gmail.com

---

## 📄 Licença

MIT - Sinta-se livre para usar e modificar! 🎉

---

**Desenvolvido com ❤️ para VELUNY**

🚀 **Pronto para colocar sua loja online!**
