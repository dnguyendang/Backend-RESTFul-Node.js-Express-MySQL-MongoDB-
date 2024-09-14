// express framework 
require('dotenv').config();
const express = require('express');  // commonjs
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');

const app = express(); // app express
const port = process.env.PORT || 8080; // port => hardcode, .uat, .prod
const hostname = process.env.HOST_NAME;

// // config template engine 
// app.set('views', './src/views');
// app.set('view endgine', 'ejs');
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})