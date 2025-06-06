const express = require('express');
const router = express.Router();
const Registration = require('../models/Registrations');

router.post('/', async (req, res) => {
  try {
    const { name, email, number, query } = req.body;

    console.log("req body",req.body);

    if (!name || !email || !number ) {
      return res.status(400).json({ message: 'Fields are required' });
    }

    const newRegistration = new Registration({ name, email, number, query });
    await newRegistration.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
