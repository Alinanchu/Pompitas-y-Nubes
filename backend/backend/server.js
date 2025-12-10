const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB (local)
mongoose.connect('mongodb://localhost:27017/cuisi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión:', err));

const productoSchema = new mongoose.Schema({

  id: Number,
  name: String,
  category: String,
  price: Number,
  originalPrice: Number,
  discount: Number,
  badge: String,
  badgeText: String,
  limited: Boolean,
  rating: Number,
  reviewCount: Number,
  stock: Number,
  image: String,
  selectedSize: String,
  description: String


});


const testimonialesSchema = new mongoose.Schema({
  name: String,
  role: String,
  text: String,
  avatar: String
});

const cuentaregresivaShema = new mongoose.Schema({
  hours: String,
  minutes: String,
  seconds: String
});

const tallasShema = new mongoose.Schema({
  id: Number,
  name: String,
  count: Number,
  selected: Boolean
});

const coloresShema = new mongoose.Schema({
  id: Number,
  name: String,
  count: Number,
  selected: Boolean
});

const categoriasShema = new mongoose.Schema({
  id: Number,
  name: String,
  count: Number,
  selected: Boolean
});



const Producto = mongoose.model('Producto', productoSchema);
const Testimoniales = mongoose.model('Testimoniales', testimonialesSchema);
const CuentaRegresiva = mongoose.model('CuentaRegresiva', cuentaregresivaShema);
const Tallas = mongoose.model('Talla', tallasShema);
const Colores = mongoose.model('Colores', coloresShema);
const Categorias = mongoose.model('Categorias', categoriasShema);

// Obtener categorias
app.get('/api/categorias', async (req, res) => {
  try {
    const categorias = await Categorias.find();
    res.json(categorias);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener categorias' });
  }
});


// Obtener colores
app.get('/api/colores', async (req, res) => {
  try {
    const colores = await Colores.find();
    res.json(colores);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener colores' });
  }
});


// Obtener tallas
app.get('/api/tallas', async (req, res) => {
  try {
    const tallas = await Tallas.find();
    res.json(tallas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tallas' });
  }
});

// Obtener cuentaRegresiva
app.get('/api/cuentaRegresiva', async (req, res) => {
  try {
    const cuentaRegresiva = await CuentaRegresiva.find();
    res.json(cuentaRegresiva);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener cuentaRegresiva' });
  }
});

// Obtener testimoniales
app.get('/api/testimoniales', async (req, res) => {
  try {
    const testimoniales = await Testimoniales.find();
    res.json(testimoniales);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener testimoniales' });
  }
});

// Obtener productos
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});


// Agregar producto
app.post('/api/productos', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar producto' });
  }
});

app.listen(5000, () => console.log('✅ Servidor backend en puerto 5000'));