const express = require('express');
const DB = require('./db');

const app = express();
const PORT = 3000;

app.get('/people/:name', async (req, res) => {
  const { name } = req.params;
  const db = new DB();

  await db.exec(`INSERT INTO people(name) VALUES('${name}')`);
  const [ person ] = await db.exec(`SELECT name FROM people WHERE name LIKE '%${name}%'`);

  res.send(`<h1>Full Cycle!</h1> ${person.name}`);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));