const express = require('express');
const router = express.Router();
const { test1Controller } = require('../controller');

router.get('/', test1Controller.test.get);

module.exports = router;
