const express = require('express');
const router = express.Router();
const { test2Controller } = require('../controller');

router.get('/', test2Controller.test.get);

module.exports = router;
