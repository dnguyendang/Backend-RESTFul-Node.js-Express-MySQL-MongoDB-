const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    {
        timestamps: true, // createdAt, updatedAt automatically added
        // statics: {
        //     findByName(name) {
        //         return this.find({ name: new RegExp(name, 'i') });
        //     },
        // }
    },
);

//soft delete
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' }); // override all methods

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer; 