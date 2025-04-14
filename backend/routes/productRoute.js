import express from 'express';
import {listProducts,addProduct,removeProduct,singleProduct} from '../controllers/productController.js';
import upload from '../middleware/multer.js';

const productRotuer = express.Router();

productRotuer.post('/add',upload.fields([{name:`image1`,maxcount:1},{name:`image2`,maxcount:1},{name:`image3`,maxcount:1},{name:`image4`,maxcount:1}]),addProduct);
productRotuer.post('/remove',removeProduct);
productRotuer.post('/single',singleProduct);
productRotuer.post('/list',listProducts);

export default productRotuer;