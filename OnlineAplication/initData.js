require('dotenv').config();
const mongoose = require('mongoose');

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  seedDatabase();
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Definir o modelo de Produto
const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
}));

// Definir o modelo de Categoria
const Category = mongoose.model('Category', new mongoose.Schema({
  name: String,
}));

// Função para inserir os dados
async function seedDatabase() {
  try {
    await Product.insertMany([
      {
        name: "T-Shirt Flamengo",
        description: "Worst Soccer Team",
        price: 29.99,
        quantity: 10,
        category: "Men"
      }
    ]);

    await Category.insertMany([
      { name: "Men" }
    ]);

    console.log('Data inserted successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting data:', error);
    mongoose.connection.close();
  }
}
