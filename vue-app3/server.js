import express from 'express';
import bodyParser from 'body-parser';
var app = express();
// import data from './db/db-k'

import sqlite3 from "sqlite3";
sqlite3.verbose();
import { open } from "sqlite";
 // this is a top-level await

// db sql test

// let  abb= (async () => {
    // open the database
    const db = await open({
      filename: "./mydb.sql",
      driver: sqlite3.Database,
    });
    // await db.exec("CREATE TABLE tbl (col TEXT)");
    // await db.exec('INSERT INTO tbl VALUES ("test")');
    // let result =  db.get("SELECT col FROM tbl WHERE col = ?", "test");
    // console.log(result)
// })()

async function  abc() {
     let result = await db.get("SELECT col FROM tbl WHERE col = ?", "test");
    console.log(result);
    return result
}

console.log(abc())
// abc()

app.set('port', (process.env.PORT || 3000));

// app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


app.get("/", function(req, res, next) {
    res.json({ 'status': 'api server is running' })
});

//get user login data.
app.post('/api/login', function (req,res){
    //get email & password
    var email = req.param('email');
    var password = req.param('password');
    //test
    console.log(email.toString());
    console.log(password.toString());
    //return rep to frontend.
    res.send("200");
});

//get user register data.
app.post('/api/register', function (req,res){
    //get email & password
    var email = req.param('email');
    var password = req.param('password');
    //test
    console.log(email.toString());
    console.log(password.toString());
    //return rep to frontend.
    res.send("200");
});


// dummy test for sql lite
app.get("/api/enterdummy", async function (req, res, next) {

   let result =  await db.exec('INSERT INTO tbl VALUES ("sssssx")');
    // console.log(result);
    // return result

    res.json({"status":"entered data in tbl"});
});

// dummy test for sql lite
app.get("/api/showdummy", async function(req, res, next) {
   let result = await db.all("SELECT * FROM tbl");
    // console.log(result);
    // return result

    res.json(result);
});

app.get('/api/products', function(req, res, next) {
    data.returnAllProducts(res,next);
});


app.get('/api/product/:id', function(req, res, next) {
    data.returnProduct(res, next,req.params.id);
});

app.post('/api/product/create', function(req, res, next) {
    var newProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    data.createProduct(res, next, newProduct)
});

app.patch('/api/product/edit/:id', function(req, res, next) {
    var updatedProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    data.updateProduct(res, next, req.params.id, updatedProduct)
});

app.delete('/api/product/delete/:id', function(req, res, next) {
    data.deleteProduct(res, next, req.params.id);
});


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
