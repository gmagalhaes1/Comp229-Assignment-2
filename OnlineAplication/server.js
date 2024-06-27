require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const keys = require('./bin/keys');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Conectar ao banco de dados
connectDB();

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.send('Welcome to the Marketplace API');
});

// Rotas da API do produto
app.use('/api', productRoutes);

const PORT = keys.server.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
