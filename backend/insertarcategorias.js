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


const categoriasShema = new mongoose.Schema({
    id: Number,
    name: String,
    count: Number,
    selected: Boolean
});

const Categorias = mongoose.model('Categorias', categoriasShema);

const categorias = [
    { id: 1, name: 'Recién Nacidos', count: 24, selected: false },
    { id: 2, name: 'Bebés (3-12 meses)', count: 36, selected: false },
    { id: 3, name: 'Niñas', count: 42, selected: false },
    { id: 4, name: 'Niños', count: 38, selected: false },
    { id: 5, name: 'Pijamas', count: 15, selected: false },
    { id: 6, name: 'Accesorios', count: 28, selected: false }
];


// Insertar Categorias
async function insertarcategorias() {
    try {
        await Categorias.insertMany(categorias);
        console.log('✅ Categorias insertados correctamente');
    } catch (err) {
        console.error('❌ Error al insertar:', err);
    } finally {
        mongoose.connection.close();
    }
}


insertarcategorias();