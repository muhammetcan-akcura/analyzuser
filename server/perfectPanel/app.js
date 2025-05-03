const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const serviceRoutes = require('./routes/serviceRoutes');
const ordersRoutes = require('./routes/orders');
const usersRoutes = require('./routes/users');
const paymentsRoutes = require('./routes/payments');

// Use routes
app.use('/api/services', serviceRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/payments', paymentsRoutes);

// MongoDB connection

mongoose.connect('mongodb+srv://jameskitten3000:<bmwaudi96>@cluster0.q5hvf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("DB connection error: ", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
