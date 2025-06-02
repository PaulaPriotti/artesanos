const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'artesanos',
  port: 3000
});

// Manejo de la conexión
connection.connect((error) => {
  if (error) {
    console.error('Error de conexión:', error); // Mostrar el error real
    return;
  }
  console.log('Conexión a MySQL exitosa.');
  
  // Iniciar el servidor solo si la conexión es exitosa
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
});
