const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 5000;

// Using pool instead of createConnection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'sewaznyn_trvls',
  password: 'A*z$!RNghfvA',
  database: 'sewaznyn_swtravles',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Define a route to get all data from tbl_blogs
app.get('/', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database!');
    connection.release();
    res.status(200).json({ message: 'Connection established successfully!' });
  } catch (error) {
    console.log('Error connecting to MySQL database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route to get all data from tbl_blogs
app.get('/blogsdata', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    // Execute a query to select all data from tbl_blogs
    const [rows, fields] = await connection.execute('SELECT * FROM tbl_blogs ORDER BY creation_date DESC');
    connection.release();

    res.status(200).json({ blogs: rows });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
