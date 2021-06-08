const express = require('express');
const router = express.Router();
const userContoller = require('../controller/userController');
router.get('/', userContoller);

module.exports = router;