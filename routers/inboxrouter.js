
const express = require('express');
const router = express.Router();
const inboxContoller = require('../controller/inboxContoller');
router.get('/', inboxContoller);

module.exports = router;