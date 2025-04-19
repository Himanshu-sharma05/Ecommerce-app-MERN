import express from 'express';
import {listProducts,addProduct,removeProduct,singleProduct} from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRotuer = express.Router();

productRotuer.post('/add',adminAuth,upload.fields([{name:`image1`,maxcount:1},{name:`image2`,maxcount:1},{name:`image3`,maxcount:1},{name:`image4`,maxcount:1}]),addProduct);
productRotuer.post('/remove',adminAuth,removeProduct);
productRotuer.post('/single',singleProduct);
productRotuer.get('/list',listProducts);

export default productRotuer;