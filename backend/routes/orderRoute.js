import express from 'express'
import {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';
const orderRotuer = express.Router();

//admin Features
orderRotuer.post('/list',adminAuth,allOrders);
orderRotuer.post('/status',adminAuth,allOrders);


//Payment Features
orderRotuer.post('/place',authUser,placeOrder);
orderRotuer.post('/stripe',authUser,placeOrderStripe);
orderRotuer.post('/razorpay',authUser,placeOrderRazorpay);

//User Feature
orderRotuer.post('/userorders',authUser,userOrders);

export default orderRotuer;