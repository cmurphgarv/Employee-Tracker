// Imports needed
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

const app = express();

const PORT = process.env.PORT || 3001;

// express middleware for reading JSON from req.body
app.use(express.json());

// connect to db
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'company_db'
    },
    console.log(`Successfully connected to the company_db database!`)
  );

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });