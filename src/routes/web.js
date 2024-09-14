const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getEyes } = require('../controllers/home.controller')
// route.Method('/route', handler)

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/eyes', getEyes);

module.exports = router; // export default