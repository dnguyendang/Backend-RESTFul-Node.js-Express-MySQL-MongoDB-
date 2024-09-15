const connection = require('../config/database');
const { post } = require('../routes/web');
const { getAllUsers } = require('../services/CRUDservice');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('<h1>check ABC</h1>')
}

const getEyes = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let { email, name, city } = req.body;
    // connection.query(
    //     `insert into Users (email, name, city)
    //     values (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('Create user succeed!');
    //     }
    // );
    let [results, fields] = await connection.query(`insert into Users (email, name, city) values (?, ?, ?)`,
        [email, name, city],
    );
    res.send('Create user succeed!');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getEyes,
    postCreateUser,
    getCreatePage
}