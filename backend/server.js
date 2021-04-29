import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';

import productRoutes from './routes/ProductsRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
//middlewares
dotenv.config();
const app = express();

//database
connectDB();

//routes
app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

//Server starting
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));
