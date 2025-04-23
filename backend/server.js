import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRotuer from './routes/userRoute.js';
import productRotuer from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRotuer from './routes/orderRoute.js';
//App config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user',userRotuer);
app.use('/api/product',productRotuer);
app.use('/api/cart',cartRouter);
app.use('/api/order',orderRotuer);
app.get('/',(req,res)=>{
    res.send('API WORKING');
});

app.listen(port,()=>{console.log(`listening on port: ${port}....`)})
