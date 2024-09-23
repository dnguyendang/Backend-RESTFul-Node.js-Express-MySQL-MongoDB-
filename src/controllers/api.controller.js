const User = require("../models/user");
const { uploadSingleFile, uploadMultipleFiles } = require('../services/file.service');


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

const postUploadSingleFileAPI = async (req, res) => {
    console.log("req.files: ", req.files);

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingleFile(req.files.image);
    console.log(">>> check result: ", result);

    return res.send("ok single file");
}

const postUploadSingleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    // upload single => files is an object
    // upload multiple => files is an array 

    if (Array.isArray(req.files.image)) {
        // upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    } else {
        // upload single
        return await postUploadSingleFileAPI(req, res);
    }
}


module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteDeleteUserAPI,
    postUploadSingleFileAPI,
    postUploadSingleFilesAPI,
}