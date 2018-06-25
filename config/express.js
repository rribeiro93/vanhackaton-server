var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('../app/routes');
var path =  require('path');
var cors = require('cors');

app.set('clientPath', path.join(__dirname, '../..', 'client'));
console.log(app.get('clientPath'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

routes(app);

module.exports = app;