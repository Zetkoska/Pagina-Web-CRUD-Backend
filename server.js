const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://zetkoska:abstenias513@cluster0.86vi5nq.mongodb.net/losprimosdb?retryWrites=true&w=majority&appName=Cluster0');

// Esquema de Comprador
const compradorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    banco: { type: String, required: true },
    carrito: [
        {
            id: Number,
            nombre: String,
            cantidad: Number,
            precio: Number
        }
    ],
    fechaCompra: { type: Date, default: Date.now }
});
const Comprador = mongoose.model('Comprador', compradorSchema);

// Endpoint para guardar una compra
app.post('/api/compradores', async (req, res) => {
    try {
        console.log('Recibido en backend:', req.body);
        const { nombre, banco, carrito } = req.body;
        const nuevoComprador = new Comprador({ nombre, banco, carrito });
        await nuevoComprador.save();
        res.status(201).json({ mensaje: 'Compra guardada exitosamente', compra: nuevoComprador });
    } catch (error) {
        console.error('Error al guardar:', error);
        res.status(400).json({ error: error.message });
    }
});
app.get('/api/compradores', async (req, res) => {
    try {
        const compras = await Comprador.find();
        res.json(compras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/compradores/:id', async (req, res) => {
    try {
        await Comprador.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Compra eliminada' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.put('/api/compradores/:id', async (req, res) => {
    try {
        const { nombre, banco, carrito } = req.body;
        const compraActualizada = await Comprador.findByIdAndUpdate(req.params.id, { nombre, banco, carrito }, { new: true });
        res.json(compraActualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor backend en http://localhost:${PORT}`));