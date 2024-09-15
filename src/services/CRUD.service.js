const connection = require("../config/database")

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users u');
    return results;
}

const getUserbyUserId = async (userId) => {
    let [results, fields] = await connection.query(
        `select * from Users u where u.id = ?`,
        [userId]
    );
    let result = results && results.length > 0 ? results[0] : {};
    return result;
}

const createUser = async (email, name, city) => {
    // connection.query(
    //     `insert into Users (email, name, city)
    //     values (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         res.send('Create user succeed!');
    //     }
    // );
    let [results, fields] = await connection.query(
        `insert into Users (email, name, city) values (?, ?, ?)`,
        [email, name, city],
    );
}

const updateUserbyUserId = async (id, email, name, city) => {
    let [results, fields] = await connection.query(
        `update Users
        set email = ?, name =?, city= ?
        where id = ?`,
        [email, name, city, id],
    );
}

module.exports = {
    getAllUsers,
    getUserbyUserId,
    updateUserbyUserId,
    createUser,
}