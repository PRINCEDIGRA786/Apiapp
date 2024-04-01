const express = require('express');
const router = express.Router();
const { createuser, login, getuser, profile } = require('../controllers/Usercontroller');

const { body } = require('express-validator');
const fetchuser = require('../Middleware/fetchUser')

// create user
router.post('/createuser', body('email').isEmail(),
    body('password').isLength({ min: 5 }), createuser);

// user login
router.post('/login', login);

//get user

router.post('/getuser', fetchuser, getuser);

router.put('/profile', fetchuser, profile)



module.exports = router