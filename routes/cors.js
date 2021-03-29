const express = require('express');
const cors = require('cors');
const app = express();

const whitelist=['https://localhost:3443','http://localhost:3000','http://anjan-HP-15-Notebook-PC:3001','http://localhost:3001','https://localhost:3001','http://192.168.1.99:3000'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);