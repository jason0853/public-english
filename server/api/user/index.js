const router = require('express').Router();
const controller = require('./userController');

router.post('/', controller.register);

module.exports = router;