const express = require('express');
const router = express.Router();
const { userController } = require('../controller');

router.get('/', userController.get);
router.post('/', userController.post);

module.exports = router;
