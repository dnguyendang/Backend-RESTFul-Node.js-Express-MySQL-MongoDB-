const connection = require("../config/database")
const User = require("../models/user")

const getAllUsers = async () => {
    let results = await User.find({});
    return results;
}

const getUserbyUserId = async (userId) => {
    let result = await User.findById(userId);
    return result;
}

const createUser = async (email, name, city) => {
    await User.create({
        email: email,
        name: name,
        city: city
    })
}

const updateUserbyUserId = async (id, email, name, city) => {
    await User.updateOne(
        { _id: id },
        { email: email, name: name, city: city })
}

const deleteUserbyUserId = async (id) => {
    await User.deleteOne({ _id: id })
}

module.exports = {
    getAllUsers,
    getUserbyUserId,
    updateUserbyUserId,
    createUser,
    deleteUserbyUserId,
}