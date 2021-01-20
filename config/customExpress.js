const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()
    
    //para a conversão do body (aplicação pronta para receber dados urlencoded)
    app.use(bodyParser.urlencoded({ extended: true })) 

    //para a conversão do json (aplicação pronta para receber dados como json)
    app.use(bodyParser.json())                         

    consign()
        .include('controllers')
        .into(app);

    return app;
}