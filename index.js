const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const registerRoute = require('./routes/register');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('WealthPlan-backend is live');
});


app.use('/api/register', registerRoute);


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
