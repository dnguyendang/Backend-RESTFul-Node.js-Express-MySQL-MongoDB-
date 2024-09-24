const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteDeleteUserAPI,
    postUploadSingleFileAPI, postUploadSingleFilesAPI } = require('../controllers/api.controller')

const { postCreateCustomer, postCreateArrayCustomer } = require('../controllers/customer.controller')

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteDeleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadSingleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);


module.exports = routerAPI; // export default 