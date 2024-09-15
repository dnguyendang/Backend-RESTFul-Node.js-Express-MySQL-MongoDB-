const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getEyes, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require('../controllers/home.controller')
// route.Method('/route', handler)

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/eyes', getEyes);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router; // export default