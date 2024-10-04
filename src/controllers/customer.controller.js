const { uploadSingleFile } = require('../services/file.service')
const { createCustomerService, createArrayCustomerService, getAllCustomersService,
    updateCustomerService, deleteCustomerService, deleteArrayCustomerService
} = require("../services/customer.service")
const Joi = require('joi');

//  {key : value}
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;

        //validate
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            address: Joi.string(),
            phone: Joi.string().parttern(new RegExp('^[0-9]{8,11}$')),
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            description: Joi.string()
        })
        const { error } = schema.validate(req.body, { abortEarly: false });
        console.log(">>> validate >>>", error)

        if (error) {
            return error;
        } else {
            let imageUrl = "";
            if (!req.files || Object.keys(req.files).length === 0) {
                // return res.status(400).send('No files were uploaded.');
                // do nothing
            } else {
                let result = await uploadSingleFile(req.files.image);
                imageUrl = result.path;
            }

            let customerData = {
                name,
                address,
                phone,
                email,
                description,
                imageUrl,
            }

            let customer = await createCustomerService(customerData)

            return res.status(200).json({
                EC: 0,
                data: customer,
            })
        }
    },

    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);

        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers,
            })
        } else {
            return res.status(500).json({
                EC: -1,
                data: customers,
            })
        }
    },

    getAllCustomers: async (req, res) => {
        // const query = aqp(
        //     'status=sent&timestamp>2016-01-01&author.firstName=/john/i&limit=100&skip=50&sort=-timestamp&populate=logs&fields=id,logs.ip'
        // );
        // console.log(">>> filter: ", query);

        let limit = req.query.limit;
        let page = req.query.page;

        let result = null;

        if (limit && page) {
            result = await getAllCustomersService(limit, page, req.query);
        } else {
            result = await getAllCustomersService();
        }

        return res.status(200).json({
            EC: 0,
            data: result,
        })
    },

    putUpdateCustomer: async (req, res) => {
        let { id, name, address, phone, email, description } = req.body;

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
        }

        let customer = await updateCustomerService(id, customerData);

        return res.status(200).json({
            EC: 0,
            data: customer,
        })
    },

    deleteDeleteCustomer: async (req, res) => {
        let id = req.body.id;

        let customer = await deleteCustomerService(id);

        return res.status(200).json({
            EC: 0,
            data: customer,
        })
    },

    deleteDeleteArrayCustomer: async (req, res) => {
        let customerIds = req.body.customerIds;

        let customers = await deleteArrayCustomerService(customerIds);

        return res.status(200).json({
            EC: 0,
            data: customers,
        })
    },

}