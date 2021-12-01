const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;
const dbConfig ={
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const connection = mysql.createConnection(dbConfig);

const sql = `INSERT INTO people(name) values('Wesley')`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle!</h1>');
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));