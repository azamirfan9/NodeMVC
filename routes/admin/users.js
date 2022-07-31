var express = require('express');

var route = express.Router();

var users = require("../../controllers/admin/users.js");
var checkAuth = require('../../middleware/checkAuth.js');

route.post('/user',users.login);
route.get('/staff/(:un)/(:pa)',users.findOne);
route.get('/test',checkAuth,users.test);

module.exports = route;