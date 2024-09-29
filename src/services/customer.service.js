const { urlencoded } = require("express");
const Customer = require("../models/customer")

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.imageUrl,
        })
        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
}

const getAllCustomersService = async (limit, page) => {
    try {
        let result = null;

        if (limit && page) {
            let offset = (page - 1) * limit;
            result = await Customer.find({}).skip(offset).limit(limit).exec();
        } else {
            result = await Customer.find({});
        }

        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}

const updateCustomerService = async (id, customerData) => {
    try {
        let result = await Customer.updateOne({ _id: id }, { $set: customerData });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const deleteCustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteArrayCustomerService = async (arrIds) => {
    try {
        let result = await Customer.delete({ _id: { $in: arrIds } });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,
    updateCustomerService,
    deleteCustomerService,
    deleteArrayCustomerService,

}