// server/index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

// Konek ke Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // sesuaikan user mysql mu
    password: '', // sesuaikan password mysql mu
    database: 'montir_db'
});

// API Register
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "User berhasil dibuat!" });
    });
});

// API Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const sql = "SELECT * FROM users WHERE username = ?";
    db.query(sql, [username], (err, data) => {
        if (err) return res.status(500).json({ error: "Error server" });
        if (data.length === 0) return res.status(404).json({ error: "User gak ketemu!" });

        const user = data[0];
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) return res.status(401).json({ error: "Password salah bro" });

        const token = jwt.sign({ id: user.id }, "rahasia_negara", { expiresIn: '1h' });
        res.json({ message: "Login sukses", token, username: user.username });
    });
});

// API Get Knowledge Base
app.get('/api/diseases', (req, res) => {
    // Ambil semua data dari tabel knowledge_base
    const sql = "SELECT * FROM knowledge_base";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        // MySQL mungkin balikin kolom JSON sebagai string atau object tergantung versi/library.
        // Kita pastiin symptoms jadi array beneran kalo masih string.
        const formattedData = results.map(item => ({
            ...item,
            // Cek kalo symptoms tipe datanya string, kita parse jadi JSON
            symptoms: typeof item.symptoms === 'string' ? JSON.parse(item.symptoms) : item.symptoms
        }));

        res.json(formattedData);
    });
});

app.listen(3001, () => {
    console.log("Server jalan di port 3001 nih bro...");
});