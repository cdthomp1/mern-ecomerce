import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Api is Running');
})

app.use('/api/products', productRoutes);

// Middleware
app.use(notFound);

// Middleware
app.use(errorHandler);




const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));