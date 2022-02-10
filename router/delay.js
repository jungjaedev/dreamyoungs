const express = require('express');
const router = express.Router();
const { delayController } = require('../controller');

router.get('/', delayController.get);

module.exports = router;
