const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getEyes, getDeletePage, getCreatePage, getUpdatePage,
    postUpdateUser, postCreateUser, postDeleteUser } = require('../controllers/home.controller')
// route.Method('/route', handler)

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/eyes', getEyes);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.get('/delete/:id', getDeletePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

router.post('/delete-user', postDeleteUser);

module.exports = router; // export default