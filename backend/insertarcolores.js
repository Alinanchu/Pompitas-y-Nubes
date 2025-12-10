const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/cuisi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error de conexión:', err));


const coloresShema = new mongoose.Schema({
    id: Number,
    name: String,
    count: Number,
    selected: Boolean
});


const Colores = mongoose.model('Colores', coloresShema);

const colores = [
    { id: 1, name: 'Rosa', count: 18, selected: false },
    { id: 2, name: 'Azul', count: 22, selected: false },
    { id: 3, name: 'Amarillo', count: 12, selected: false },
    { id: 4, name: 'Blanco', count: 25, selected: false },
    { id: 5, name: 'Verde', count: 8, selected: false },
    { id: 6, name: 'Morado', count: 10, selected: false }
];


// Insertar Colores
async function insertarcolores() {
    try {
        await Colores.insertMany(colores);
        console.log('✅ Colores insertados correctamente');
    } catch (err) {
        console.error('❌ Error al insertar:', err);
    } finally {
        mongoose.connection.close();
    }
}


insertarcolores();