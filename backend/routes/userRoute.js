import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const userRotuer = express.Router();

userRotuer.post('/register',registerUser)
userRotuer.post('/login',loginUser)
userRotuer.post('/admin',adminLogin)

export default userRotuer;
