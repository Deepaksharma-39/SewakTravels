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

app.get('/payments', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    // Execute a query to select all data from tbl_blogs
    const [rows, fields] = await connection.execute('SELECT * FROM payments');
    console.log(rows)
    connection.release();

    res.status(200).json({ billingDetails: rows });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/payments', async (req, res) => {
  try {
    const {
      transaction_id,
      invoice_no,
      pick_type,
      base_price,
      car_price,
      status,
      billing_name,
      billing_email,
      billing_mobile,
      mode_of_payment,
      cab_type,
      min_amount,
      trip_type,
      pickup_location,
      drop_location,
      pickup_date,
      pickup_time,
      return_date,
      return_time,
      distance,
      duration,
      driver_allowance,
      night_charges,
      car_type,
      discount,
      sub_total,
      order_comments,
      total,
      min_paid_amount,
      paid_amount
    } = req.body;

    // Validate required fields
    if (
      !transaction_id ||
      !billing_name ||
      !billing_email ||
      !billing_mobile ||
      !pickup_location ||
      !drop_location ||
      !pickup_date ||
      !distance ||
      !duration ||
      !total
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const connection = await pool.getConnection();
    // Execute a query to insert data into payments table
    await connection.execute(
      'INSERT INTO payments (transaction_id, invoice_no, pick_type, base_price, car_price, status, billing_name, billing_email, billing_mobile, mode_of_payment, cab_type, min_amount, trip_type, pickup_location, drop_location, pickup_date, pickup_time, return_date, return_time, distance, duration, driver_allowance, night_charges, car_type, discount, sub_total, order_comments, total, min_paid_amount, paid_amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        transaction_id,
        invoice_no,
        pick_type,
        base_price,
        car_price,
        status,
        billing_name,
        billing_email,
        billing_mobile,
        mode_of_payment,
        cab_type,
        min_amount,
        trip_type,
        pickup_location,
        drop_location,
        pickup_date,
        pickup_time,
        return_date,
        return_time,
        distance,
        duration,
        driver_allowance,
        night_charges,
        car_type,
        discount,
        sub_total,
        order_comments,
        total,
        min_paid_amount,
        paid_amount
      ]
    );
    connection.release();

    res.status(201).json({ message: 'Transaction added successfully' });
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Start the Express server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
