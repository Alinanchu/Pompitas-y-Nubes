const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/cuisi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error de conexión:', err));


const testimonialesSchema = new mongoose.Schema({
    name: String,
    role: String,
    text: String,
    avatar: String
});

const Testimoniales = mongoose.model('Testimoniales', testimonialesSchema);

const testimoniales = [
    {
        name: 'Ana García',
        role: 'Mamá de Lucas',
        text: 'La ropa de Pompitas es increíblemente suave y de alta calidad. Mi bebé está siempre cómodo y las prendas resisten perfectamente los lavados frecuentes. ¡Totalmente recomendable!',
        avatar: 'https://images.pexels.com/photos/4079216/pexels-photo-4079216.jpeg'
    },
    {
        name: 'Carlos Rodríguez',
        role: 'Papá de Sofía',
        text: 'Como padre primerizo, valoro mucho la seguridad y comodidad de la ropa de mi hija. Pompitas supera todas mis expectativas con materiales orgánicos y diseños encantadores.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'María López',
        role: 'Mamá de gemelos',
        text: 'Comprar para gemelos puede ser un desafío, pero Pompitas hace que sea fácil con su variedad de tallas y diseños coordinados. El servicio al cliente es excepcional también.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    },
    {
        name: 'Laura Martínez',
        role: 'Mamá de Diego',
        text: 'Me encanta la durabilidad de las prendas de Pompitas. Mi hijo es muy activo y la ropa mantiene su forma y color incluso después de muchos lavados. ¡Calidad excepcional!',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
    }
];



// Insertar Testimoniales
async function insertartestimoniales() {
    try {
        await Testimoniales.insertMany(testimoniales);
        console.log('✅ Testimoniales insertados correctamente');
    } catch (err) {
        console.error('❌ Error al insertar:', err);
    } finally {
        mongoose.connection.close();
    }
}

insertartestimoniales();