// Import required modules
const express = require('express');
const mysql = require('mysql2/promise');

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MySQL database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chatbotdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Middleware for parsing JSON requests
app.use(express.json());
// Define route handler for root URL
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});


// CRUD routes for items
// Create
app.post('/items', async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const [rows, fields] = await pool.query('INSERT INTO items (name, description, price) VALUES (?, ?, ?)', [name, description, price]);
        res.status(201).json({ message: 'Item created', itemId: rows.insertId });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read (all items)
app.get('/items', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM items');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Read (single item by ID)
app.get('/items/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const [rows, fields] = await pool.query('SELECT * FROM items WHERE id = ?', [itemId]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update
app.put('/items/:id', async (req, res) => {
    const itemId = req.params.id;
    const { name, description, price } = req.body;
    try {
        await pool.query('UPDATE items SET name = ?, description = ?, price = ? WHERE id = ?', [name, description, price, itemId]);
        res.json({ message: 'Item updated' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
app.delete('/items/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        await pool.query('DELETE FROM items WHERE id = ?', [itemId]);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
