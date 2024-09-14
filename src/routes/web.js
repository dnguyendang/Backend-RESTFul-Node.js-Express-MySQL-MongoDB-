const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getEyes, postCreateUser } = require('../controllers/home.controller')
// route.Method('/route', handler)

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/eyes', getEyes);
router.post('/create-user', postCreateUser);


module.exports = router; // export default