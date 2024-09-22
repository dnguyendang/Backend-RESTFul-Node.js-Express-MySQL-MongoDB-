const User = require("../models/user");

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    let { email, name, city } = req.body;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const putUpdateUserAPI = async (req, res) => {
    let { id, email, name, city } = req.body;
    let user = await User.updateOne({ _id: id }, { email: email, name: name, city: city });
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const deleteDeleteUserAPI = async (req, res) => {
    let id = req.body.id;
    let user = await User.deleteOne({ _id: id });
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteDeleteUserAPI
}