const express = require('express');
const router = express.Router();
const loginController = require('../controller/logincontroller');

router.get('/', loginController);

module.exports = router;