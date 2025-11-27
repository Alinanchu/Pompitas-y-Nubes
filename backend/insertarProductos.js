const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/cuisi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Definir esquema y modelo
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

const Producto = mongoose.model('Producto', productoSchema);

const productos = [
  {
    id: 1,
    name: 'Body Suave Pompitas Algodón Orgánico',
    category: 'Bodies',
    price: 150,
    originalPrice: 180,
    discount: 17,
    badge: 'sale',
    badgeText: 'Oferta',
    limited: true,
    rating: 4.5,
    reviewCount: 24,
    stock: 15,
    image: 'https://images.pexels.com/photos/30350498/pexels-photo-30350498.jpeg?w=400&h=300&fit=crop',
    selectedSize: '3-6 meses',
    description: 'Body de algodón orgánico 100% suave como una nube para tu bebé. Diseñado para máxima comodidad y libertad de movimiento.'
  },
  {
    id: 2,
    name: 'Pijama Nubes Confort Nocturno',
    category: 'Pijamas',
    price: 200,
    originalPrice: 250,
    discount: 20,
    badge: 'sale',
    badgeText: 'Oferta',
    limited: false,
    rating: 4.8,
    reviewCount: 36,
    stock: 8,
    image: 'https://images.pexels.com/photos/4473777/pexels-photo-4473777.jpeg?auto=compress&cs=tinysrgb&w=600',
    selectedColor: 'blue',
    selectedSize: '6-9 meses',
    description: 'Pijama de felpa suave con diseño de nubes. Perfecto para noches de sueño reparador y cómodo.'
  },
  {
    id: 3,
    name: 'Conjunto Estelar Bebé Aventurero',
    category: 'Conjuntos',
    price: 320,
    originalPrice: null,
    discount: 0,
    badge: 'new',
    badgeText: 'Nuevo',
    limited: false,
    rating: 4.7,
    reviewCount: 18,
    stock: 22,
    image: 'https://images.pexels.com/photos/3934002/pexels-photo-3934002.jpeg',
    selectedColor: 'yellow',
    selectedSize: '9-12 meses',
    description: 'Conjunto de dos piezas con diseño estelar. Ideal para el día a día de tu pequeño explorador.'
  },
  {
    id: 4,
    name: 'Vestido Primaveral Flores Silvestres',
    category: 'Vestidos',
    price: 280,
    originalPrice: null,
    discount: 0,
    badge: 'popular',
    badgeText: 'Popular',
    limited: false,
    rating: 4.9,
    reviewCount: 42,
    stock: 12,
    image: 'https://images.pexels.com/photos/30015981/pexels-photo-30015981.jpeg',
    selectedColor: 'pink',
    selectedSize: '12-18 meses',
    description: 'Vestido primaveral con estampado de flores silvestres. Fresco, cómodo y perfecto para ocasiones especiales.'
  },
  {
    id: 5,
    name: 'Enterizo Animalitos Diversión',
    category: 'Enterizos',
    price: 240,
    originalPrice: 300,
    discount: 20,
    badge: 'sale',
    badgeText: 'Oferta',
    limited: true,
    rating: 4.6,
    reviewCount: 29,
    stock: 5,
    image: 'https://images.pexels.com/photos/8501500/pexels-photo-8501500.jpeg',
    selectedColor: 'white',
    selectedSize: '3-6 meses',
    description: 'Enterizo con divertidos animalitos. Práctico, cómodo y fácil de poner y quitar para cambios rápidos.'
  },
  {
    id: 6,
    name: 'Gorro y Mitones Set Invierno',
    category: 'Accesorios',
    price: 120,
    originalPrice: null,
    discount: 0,
    badge: 'new',
    badgeText: 'Nuevo',
    limited: false,
    rating: 4.4,
    reviewCount: 15,
    stock: 30,
    image: 'https://images.pexels.com/photos/19524516/pexels-photo-19524516.jpeg',
    selectedColor: 'blue',
    selectedSize: '0-3 meses',
    description: 'Set de gorro y mitones para mantener a tu bebé abrigado en los días fríos. Suave y acogedor.'
  },
  {
    id: 7,
    name: 'Body Manga Larga Algodón Premium',
    category: 'Bodies',
    price: 180,
    originalPrice: null,
    discount: 0,
    badge: 'bestseller',
    badgeText: 'Más Vendido',
    limited: false,
    rating: 4.8,
    reviewCount: 56,
    stock: 25,
    image: 'https://images.pexels.com/photos/13710322/pexels-photo-13710322.jpeg',
    selectedColor: 'white',
    selectedSize: '6-9 meses',
    description: 'Body de manga larga en algodón premium. Suave, transpirable y perfecto para todo el día.'
  },
  {
    id: 8,
    name: 'Pantalón Jogger Bebé Moderno',
    category: 'Pantalones',
    price: 160,
    originalPrice: 200,
    discount: 20,
    badge: 'sale',
    badgeText: 'Oferta',
    limited: false,
    rating: 4.5,
    reviewCount: 22,
    stock: 18,
    image: 'https://images.pexels.com/photos/5560024/pexels-photo-5560024.jpeg',
    selectedColor: 'gray',
    selectedSize: '12-18 meses',
    description: 'Pantalón jogger con cintura elástica. Cómodo, moderno y perfecto para jugar y explorar.'
  },
   {
    id: 9,
    name: 'Chupones',
    category: 'Bebés (3-12 meses)',
    price: 160,
    originalPrice: 200,
    discount: 20,
    badge: 'sale',
    badgeText: 'Oferta',
    limited: false,
    rating: 4.5,
    reviewCount: 22,
    stock: 18,
    image: 'https://th.bing.com/th/id/OIP.yQZKM_-13RwPoSlPbn3gxAHaHx?w=185&h=195&c=7&r=0&o=7&pid=1.7&rm=3',
    selectedColor: 'gray',
    selectedSize: '12-18 meses',
    description: 'Chupones para estimulacion.'
  }
];


async function insertarproductos() {
  try {
    await Producto.insertMany(productos);
    console.log('✅ Productos insertados correctamente');
  } catch (err) {
    console.error('❌ Error al insertar:', err);
  } finally {
    mongoose.connection.close();
  }
}

insertarproductos();

