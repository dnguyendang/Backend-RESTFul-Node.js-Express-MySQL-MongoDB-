const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! with nodemon')
})

router.get('/abc', (req, res) => {
    res.send('<h1>Check ABC</h1>')
})

router.get('/sample', (req, res) => {
    // res.send('<h1>Check ABC-h1</h1>')
    res.render('sample.ejs')
})

module.exports = router; // export default