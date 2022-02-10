const express = require('express');
const router = express.Router();
const { userController } = require('../controller');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:userIndex/hasCat', userController.checkHasCat);
router.post('/:userIndex/hasCat', userController.updateHasCat);

module.exports = router;
