const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const itemRoutes = require('./routes/items');

// Middleware
app.use(cors());
app.use(express.json()); 

// Rutas
app.use('/items', itemRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
