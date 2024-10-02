const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI,
    putUpdateUserAPI, deleteDeleteUserAPI,
    postUploadSingleFileAPI, postUploadSingleFilesAPI
} = require('../controllers/api.controller')

const { postCreateCustomer, postCreateArrayCustomer,
    getAllCustomers, putUpdateCustomer,
    deleteDeleteCustomer, deleteDeleteArrayCustomer
} = require('../controllers/customer.controller')

const { postCreateProject,

} = require('../controllers/project.controller')


routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteDeleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadSingleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomer);
routerAPI.delete('/customers', deleteDeleteCustomer);
routerAPI.delete('/customers-many', deleteDeleteArrayCustomer);

routerAPI.get('/info', (req, res) => {
    console.log(">>> check query: ", req.query)
    return res.status(200).json({
        data: req.query
    })
});

routerAPI.post('/projects', postCreateProject);


module.exports = routerAPI; // export default 