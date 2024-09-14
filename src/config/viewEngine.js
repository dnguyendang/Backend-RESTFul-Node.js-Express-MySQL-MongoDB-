const express = require('express');

const configViewEngine = (app) => {
    app.set('views', './src/views');
    app.set('view endgine', 'ejs');

    // config static files
    app.use(express.static('./src/public'));
}

module.exports = configViewEngine;