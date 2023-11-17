const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// Load environment variables from .env
// dotenv.config();
const app = express();
const coursRoutes = require('./routes/rCours');
const instutRoutes = require('./routes/rInstitute');
const rgstrRoutes = require('./routes/rRegisters');
// const MONGODB_URI = process.env.MONGDB_URI; // Correct the variable name
const PORT =  3000;
const dbURI = 'mongodb://127.0.0.1:27017/instuteDB';

/* Middlewares */
app.use(express.json());
app.use(cors());

/* API routes */
app.use('/user', coursRoutes);
app.use('/course', coursRoutes);
app.use('/institute', instutRoutes);
app.use('/register', rgstrRoutes);

// Application connection

/* Database connection functionality start */
mongoose
  .connect(dbURI)
  .then(() => {
    console.log(`MongoDB connected successfully ${dbURI}`);
    app.listen(PORT, () => {
      console.log(`Server connected successfully on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error occurred: ${error}`);
  });
