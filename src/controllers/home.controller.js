const connection = require('../config/database')

const getHomepage = (req, res) => {
    // process data
    // call model
    let users = [];
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>> results= ", results); // results contains rows returned by server
            // console.log(">> check users: ", users);
            res.send(JSON.stringify(users))
        }
    )
}

const getABC = (req, res) => {
    res.send('<h1>check ABC</h1>')
}

const getEyes = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getEyes
}