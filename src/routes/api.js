const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteDeleteUserAPI } = require('../controllers/api.controller')


routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', deleteDeleteUserAPI);




module.exports = routerAPI; // export default 