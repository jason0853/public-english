const router = require('express').Router();
const authController = require('./authController');

router.post('/', authController.login);

module.exports = router;