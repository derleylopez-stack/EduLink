
const express = require('express');
const app = express();
const port = 3000;

// Ruta principal (homepage)
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});


app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});