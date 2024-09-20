const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3000;

const config = {
    user: 'Long',
    password: '123',
    server: 'MSI',
    database: 'LibraryDB',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/books', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM Books');
        res.json(result.recordset);
    } catch (err) {
        console.error('Lỗi:', err);
        res.status(500).send(err);
    }
});

app.get('/users', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM Users');
        res.json(result.recordset);
    } catch (err) {
        console.error('Lỗi:', err);
        res.status(500).send(err);
    }
});

app.get('/borrowingrecords', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM BorrowingRecords');
        res.json(result.recordset);
    } catch (err) {
        console.error('Lỗi:', err);
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});