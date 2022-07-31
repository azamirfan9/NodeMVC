var express = require('express');

var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var fileUpload = require('express-fileupload');
app.use(fileUpload())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Content-Type", "application/json");
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

const user = require("./routes/admin/users.js");
const manageQuestion = require("./routes/admin/manageQuestionRoutes");

app.use('/',user);
app.use('/',manageQuestion);

app.listen(4000,function(){
    console.log('Server is running 4000');
})