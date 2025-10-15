const express = require('express')
const router = express.Router();
const { validateToken } = require('./controllers/token.controller');

router.use('/auth', require('./routes/token.route'));

router.use(validateToken);
router.use('/user', require('./routes/user.route'));

module.exports = router;