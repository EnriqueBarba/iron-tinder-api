const express = require('express');
const router = express.Router();
const baseController = require('../controllers/controller');
const userController = require('../controllers/user.controller');
const likeController = require('../controllers/like.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const upload = require('./cloudinary.config');


router.get('/', baseController.base);

//USERS
router.post('/register', upload.single('image'), userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

//LIKES
router.post('/user/:id/:status', likeController.like);




module.exports = router;
