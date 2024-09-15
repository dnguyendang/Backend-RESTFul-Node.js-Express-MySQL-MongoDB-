const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getEyes, postCreateUser, getCreatePage } = require('../controllers/home.controller')
// route.Method('/route', handler)

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/eyes', getEyes);
router.post('/create-user', postCreateUser);
router.get('/create', getCreatePage);

module.exports = router; // export default