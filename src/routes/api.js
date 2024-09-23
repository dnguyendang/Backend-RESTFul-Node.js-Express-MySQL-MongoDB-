const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteDeleteUserAPI,
    postUploadSingleFileAPI, postUploadSingleFilesAPI } = require('../controllers/api.controller')


routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteDeleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/files', postUploadSingleFilesAPI);


module.exports = routerAPI; // export default 