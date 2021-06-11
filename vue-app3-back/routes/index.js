const express = require('express');
const router = express.Router();

const sqlite3 = require("sqlite3");
sqlite3.verbose();
const {open} = require("sqlite");

let db

let abb = (async () => {
// open the database
     db = await open({
        filename: "./mydb.sql",
        driver: sqlite3.Database,
    });
// await db.exec("CREATE TABLE tbl (col TEXT)");

// await db.exec("CREATE TABLE IF NOT EXISTS exam_schedule (\n" +
//     "\tid INT,\n" +
//     "\texam_name VARCHAR(50),\n" +
//     "\texam_time TIMESTAMP\n" +
//     ");\n" +
//     "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (1, 'dev tools', '1623266926');\n" +
//     "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (2, 'dev tools 2', '1623266926');\n" +
//     "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (3, 'dev tools 3', '1623266926');\n" +
//     "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (4, 'dev tools44', '1623266926');\n" +
//     "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (5, 'dev tools 5', '1623266926');\n"
// )

//     await db.exec("CREATE TABLE IF NOT EXISTS exam_score (\n" +
//     "\tid INT,\n" +
//     "\texam_name VARCHAR(50),\n" +
//     "\texam_result INT\n" +
//     ");\n" +
//     "insert into EXAM_SCORE (id, exam_name, exam_result) values (1, 'dev tools', 5);\n" +
//     "insert into EXAM_SCORE (id, exam_name, exam_result) values (2, 'dev tools 2', 6);\n" +
//     "insert into EXAM_SCORE (id, exam_name, exam_result) values (3, 'dev tools 3', 7);\n" +
//     "insert into EXAM_SCORE (id, exam_name, exam_result) values (4, 'dev tools44', 8);\n" +
//     "insert into EXAM_SCORE (id, exam_name, exam_result) values (5, 'dev tools 5', 9);\n"
// )

// await db.exec('INSERT INTO tbl VALUES ("test")');
// let result =  db.get("SELECT col FROM tbl WHERE col = ?", "test");
// console.log(result)
let result =  await db.all("SELECT * FROM exam_schedule");
console.log(result)
})()


/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({message: 'Student portal backend server'});
});

router.get('/test', function (req, res, next) {
    res.send({message: 'Student portal backend server'});
});


//get user login data.
router.post('/api/login', function (req, res) {
    //get email & password
    const email = req.param('email');
    const password = req.param('password');
    //test
    console.log(email.toString());
    console.log(password.toString());
    //return rep to frontend.
    res.send("200");
});


//get user register data.
router.post('/api/register', function (req, res) {
    //get email & password
    const email = req.param('email');
    const password = req.param('password');
    //test
    console.log(email.toString());
    console.log(password.toString());
    //return rep to frontend.
    res.send("200");
});



// dummy test for sql lite
router.get("/api/enterdummy", async function (req, res, next) {

    let result = await db.exec('INSERT INTO tbl VALUES ("sssssx")');
    // console.log(result);
    // return result

    res.json({"status": "entered data in tbl"});
});

// dummy test for sql lite
router.get("/api/showdummy", async function (req, res, next) {
    let result = await db.all("SELECT * FROM tbl");
    // console.log(result);
    // return result

    res.json(result);
});

// Show exam schedule data
router.get("/api/exam-schedule", async function (req, res, next) {
    try {
        let result = await db.all("SELECT * FROM exam_schedule");
        res.json(result);
    } catch (e) {
        res.json(e);
    }
});

// Show exam score data
router.get("/api/exam-score", async function (req, res, next) {
    try {
        let result = await db.all("SELECT * FROM exam_score");
        res.json(result);
    } catch (e) {
        res.json(e);
    }
});

router.get('/api/products', function (req, res, next) {
    data.returnAllProducts(res, next);
});


router.get('/api/product/:id', function (req, res, next) {
    data.returnProduct(res, next, req.params.id);
});

router.post('/api/product/create', function (req, res, next) {
    var newProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    data.createProduct(res, next, newProduct)
});

router.patch('/api/product/edit/:id', function (req, res, next) {
    var updatedProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    data.updateProduct(res, next, req.params.id, updatedProduct)
});

router.delete('/api/product/delete/:id', function (req, res, next) {
    data.deleteProduct(res, next, req.params.id);
});


module.exports = router;
