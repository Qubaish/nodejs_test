require('dotenv').load();
var Sequelize = require('sequelize');

var DBURL = process.env.DB_URL;
module.exports.db = require('./models/index');
