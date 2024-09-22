// express framework 
require('dotenv').config();
const express = require('express');  // commonjs
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');
const connection = require('./src/config/database');
const app = express(); // app express
const port = process.env.PORT || 8080; // port => hardcode, .uat, .prod
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine 
configViewEngine(app);

// declare  route
app.use('/', webRoutes);

//test connection
(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
})()
