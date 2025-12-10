const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/cuisi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error de conexión:', err));


const tallasShema = new mongoose.Schema({
    id: Number,
    name: String,
    count: Number,
    selected: Boolean
});

const Tallas = mongoose.model('Talla', tallasShema);

const tallas = [
    { id: 1, name: '0-3 meses', count: 15, selected: false },
    { id: 2, name: '3-6 meses', count: 20, selected: false },
    { id: 3, name: '6-9 meses', count: 18, selected: false },
    { id: 4, name: '9-12 meses', count: 16, selected: false },
    { id: 5, name: '12-18 meses', count: 14, selected: false },
    { id: 6, name: '18-24 meses', count: 12, selected: false }
];


// Insertar Tallas
async function insertartallas() {
    try {
        await Tallas.insertMany(tallas);
        console.log('✅ Tallas insertados correctamente');
    } catch (err) {
        console.error('❌ Error al insertar:', err);
    } finally {
        mongoose.connection.close();
    }
}


insertartallas();