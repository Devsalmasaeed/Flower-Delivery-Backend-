// backend/routes/flower.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const Flower = require('../models/flower');
const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage });

// POST /api/flowers - add a flower
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const { name, category, price, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const newFlower = new Flower({
      name,
      category,
      price,
      description,
      photo: `/uploads/${req.file.filename}`
    });

    await newFlower.save();
    res.status(201).json(newFlower);
  } catch (error) {
    console.error('Error saving flower:', error);
    res.status(500).json({ error: 'Failed to save flower' });
  }
});

// GET /api/flowers - get all flowers
router.get('/', async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.status(200).json(flowers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flowers' });
  }
});

// DELETE /api/flowers/:id - delete flower
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Flower.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Flower not found' });
    res.status(200).json({ message: 'Flower deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete flower' });
  }
});

module.exports = router;
