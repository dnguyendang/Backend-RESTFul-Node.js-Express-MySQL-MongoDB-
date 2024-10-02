// express framework 
require('dotenv').config();
const express = require('express');  // commonjs
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');
const apiRoutes = require('./src/routes/api');
const fileUpload = require('express-fileupload');

const connection = require('./src/config/database');
// const { MongoClient } = require('mongodb');

const app = express(); // app express
const port = process.env.PORT || 8080; // port => hardcode, .uat, .prod
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload());

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine 
configViewEngine(app);

// declare route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);

// test connection
(async () => {
    try {
        // // using mongoose
        // await connection();

        // //using mongodb driver
        // // connection url 
        // const url = process.env.DB_HOST_WITH_DRIVER;
        // const client = new MongoClient(url);
        // // Database Name 
        // const dbName = process.env.DB_NAME;
        // await client.connect();
        // console.log('Connected successfully to server');
        // const db = client.db(dbName);
        // const collection = db.collection('customers');
        // // collection.insertOne({ "name": "Dang Dung" });
        // // collection.insertOne({ email: "Ha Noi" })
        // // collection.insertOne({ test: [1, 2, 3], "address": "Ha Noi" })
        // // collection.insertOne(
        // //     {
        // //         "name": "Hoi Dan IT",
        // //         address: {
        // //             province: 'hn',
        // //             country: {
        // //                 name: 'vietnam',
        // //                 code: 10000
        // //             }
        // //         }
        // //     }
        // // )
        // // let a = await collection.findOne({ address: "Ha Noi" })
        // // console.log(">>> find = ", a)

        await connection();

        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
})()
