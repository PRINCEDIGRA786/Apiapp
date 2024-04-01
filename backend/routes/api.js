const express = require('express');
const router = express.Router();
const { getApi } = require("../controllers/GetApi");
const { putLink } = require('../controllers/linkapi')




//For Api:
router.post('/getapi', getApi);
router.put('/putlink', putLink)

module.exports = router;