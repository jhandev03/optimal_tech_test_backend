const express = require('express');
const router = express.Router();
const pool = require('../db');

// Obtener todos los items
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Crear un nuevo item
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO items (name) VALUES ($1) RETURNING *', [name]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Actualizar un item existente (nueva ruta PUT)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const result = await pool.query(
      'UPDATE items SET name = $1 WHERE id = $2 RETURNING *',
      [name, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Item no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Error al actualizar el item' });
  }
});

// Eliminar un item
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
    res.sendStatus(204);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
