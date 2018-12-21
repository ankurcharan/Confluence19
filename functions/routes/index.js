const express = require('express');
const app = express.Router();

const mediaRoutes = require('./mediaRoutes');

app.use('/gallery', mediaRoutes);


module.exports = app;