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

    //exam schedule
    await db.exec("DROP TABLE IF EXISTS peer_study_assignments; CREATE TABLE IF NOT EXISTS peer_study_assignments (\n" +
        "\tid INT,\n" +
        "\tpeer_study_id INT,\n" +
        "\ttitle VARCHAR(50),\n" +
        "\tsubtitle VARCHAR(50)\n" +
        ");\n" +
        "insert into peer_study_assignments (id, peer_study_id, title, subtitle) values (1, 23 , 'Finish Hello world assignment 1', 'Check the work of your classmate');\n" +
        "insert into peer_study_assignments (id, peer_study_id, title, subtitle) values (2, 23 , 'Finish Hello world assignment 2', 'Check the work of your classmate');\n" +
        "insert into peer_study_assignments (id, peer_study_id, title, subtitle) values (3, 23 , 'Finish Hello world assignment 3', 'Check the work of your classmate');\n" +
        "insert into peer_study_assignments (id, peer_study_id, title, subtitle) values (4, 23 , 'Finish Hello world assignment 4', 'Check the work of your classmate');\n"
    )

    //exam schedule
    await db.exec("DROP TABLE IF EXISTS exam_schedule; CREATE TABLE IF NOT EXISTS exam_schedule (\n" +
        "\tid INT,\n" +
        "\texam_name VARCHAR(50),\n" +
        "\texam_time TIMESTAMP\n" +
        ");\n" +
        "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (1, 'Hello world', '1623266926');\n" +
        "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (2, 'HBO-ICT project', '1623266926');\n" +
        "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (3, 'Web development', '1623266926');\n" +
        "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (4, 'Dev tools', '1623266926');\n" +
        "insert into EXAM_SCHEDULE (id, exam_name, exam_time) values (5, 'dev tools 5', '1623266926');\n"
    )


    //email preview
    await db.exec("DROP TABLE IF EXISTS email_preview; CREATE TABLE IF NOT EXISTS email_preview (\n" +
        "\tid INT,\n" +
        "\tsender_name VARCHAR(50),\n" +
        "\ttitle VARCHAR(50),\n" +
        "email_time TIMESTAMP\n" +
        ");\n" +
        "insert into email_preview (id, sender_name, title, email_time) values (1, 'Dick Heijink','Project passed' , '1623266926');\n" +
        "insert into email_preview (id, sender_name, title, email_time) values (2, 'Dick Heijink', 'Submition received' ,'1623266926');\n" +
        "insert into email_preview (id, sender_name, title, email_time) values (3, 'Floor Weijma', 'Good job team!' , '1623266926');\n" +
        "insert into email_preview (id, sender_name, title, email_time) values (3, 'Dick Heijink', 'Submition received' , '1623266926');\n" +
        "insert into email_preview (id, sender_name, title, email_time) values (3, 'Dick Heijink', 'Submition received' , '1623266926');\n"
    )

    //exam score
    await db.exec("DROP TABLE IF EXISTS exam_score; CREATE TABLE IF NOT EXISTS exam_score (\n" +
        "\tid INT,\n" +
        "\texam_name VARCHAR(50),\n" +
        "\texam_result INT\n" +
        ");\n" +
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (1, 'Dev tools', 9);\n" +
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (5, 'Hello World', 10);\n"+
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (2, 'Web applications', 8);\n" +
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (3, 'C++', 10);\n" +
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (4, 'Algorithms 2', 8);\n" +
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (5, 'Concurrency', 9);\n" +
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (5, 'Web Technology', 10);\n" +
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (5, 'Curiosity', 9);\n"+
        "insert into EXAM_SCORE (id, exam_name, exam_result) values (5, 'Organisation and IT', 9);\n"
    )

    //subject
    await db.exec("DROP TABLE IF EXISTS subject; CREATE TABLE IF NOT EXISTS subject (\n" +
        "\tid INT,\n" +
        "\tsubject_name VARCHAR(50)\n" +
        ");\n" +
        "insert into Subject (id, subject_name) values (1, 'Introduction to programming');\n" +
        "insert into Subject (id, subject_name) values (2, 'IT and Law');\n" +
        "insert into Subject (id, subject_name) values (3, 'Compliers and Operating system');\n" +
        "insert into Subject (id, subject_name) values (4, 'Development tools');\n"
    )

    //news
    await db.exec("DROP TABLE IF EXISTS news; CREATE TABLE IF NOT EXISTS news (\n" +
        "\tid INT,\n" +
        "\tnews_title VARCHAR(50)\n" +
        ");\n" +
        "insert into NEWS (id, news_title) values (1, 'SAXION INTRODUCTION DAYS 2021: SAXION CAMPSITE ALMOST OPEN');\n" +
        "insert into NEWS (id, news_title) values (2, 'MAKE UP YOUR MINOR! FIND OUT MORE ABOUT OUR OFFER NOW');\n" +
        "insert into NEWS (id, news_title) values (3, 'CORONA-UPDATE: REQUEST SELF-TESTS FROM MAY 5');\n"
    )

    // schedule
    await db.exec("DROP TABLE IF EXISTS schedule; CREATE TABLE IF NOT EXISTS schedule (\n" +
        "\tid INT,\n" +
        "\tschedule_name VARCHAR(50),\n" +
        "\tschedule_time TIMESTAMP\n" +
        ");\n" +
        "insert into SCHEDULE (id, schedule_name,schedule_time) values (1, 'C++', '1623266926');\n" +
        "insert into SCHEDULE (id, schedule_name, schedule_time) values (2, 'Curiosity', '1623266926');\n" +
        "insert into SCHEDULE (id, schedule_name, schedule_time) values (3, 'Concurrency', '1623266926');\n" +
        "insert into SCHEDULE (id, schedule_name, schedule_time) values (4, 'IT and Law', '1623266926');\n" +
        "insert into SCHEDULE (id, schedule_name, schedule_time) values (5, 'International work', '1623266926');\n"
    )
     //Assignment
    await db.exec("DROP TABLE IF EXISTS module_assignment; CREATE TABLE IF NOT EXISTS module_assignment (\n" +
        "\tid INT,\n" +
        "\tassignment_id INT,\n" +
        "\ttitle VARCHAR(50),\n" +
        "\tsubtitle VARCHAR(50),\n" +
        "\trating INT,\n" +
        "\ttext VARCHAR(50),\n" +
        "\timage VARCHAR(50)\n"+
        ");\n" +
        "insert into module_assignment (id, assignment_id, title, subtitle, rating, text, image) values (1, 1 , 'assignment 1', 'level 1', 1, 'Write a program, that greets you whenever you run it.For example: ', 'assignment1.png');\n" +
        "insert into module_assignment (id, assignment_id, title, subtitle, rating, text, image) values (2, 1 , 'assignment 2', 'level 2', 2, 'Write a program that prompts the user for a name. Then greet the person with that name. For example: ', 'assignment2.png');\n" +
        "insert into module_assignment (id, assignment_id, title, subtitle, rating, text, image) values (3, 1 , 'assignment 3', 'level 3', 3, 'Write a program that prompts the user for an answer of a calculation. You may hard-code the values used in the question.', 'assignment3.png');\n"
    )

    // teachers
    await db.exec("DROP TABLE IF EXISTS find_teacher; CREATE TABLE find_teacher (\n" +
        "\t id INT,\n" +
        "\t teacher_name VARCHAR(50),\n" +
        "\t teacher_email VARCHAR(50),\n" +
        "\t teacher_abbreviation VARCHAR(50)\n" +
        ");\n" +
        "insert into find_teacher (id, teacher_name, teacher_email, teacher_abbreviation) values (1, 'Dick Heijink', 'j.d.heijink@saxion.nl', 'jdh');\n" +
        "insert into find_teacher (id, teacher_name, teacher_email, teacher_abbreviation) values (2, 'Floor Weijman', 'f.r.weijman@saxion.nl', 'frw');\n" +
        "insert into find_teacher (id, teacher_name, teacher_email, teacher_abbreviation) values (3, 'Rogier Hommelsn', 'r.m.hommels@saxion.nl', 'rmh');\n"
    )

    console.log( await db.all("SELECT * FROM email_preview"))
    console.log( await db.all("SELECT * FROM subject"))
    console.log( await db.all("SELECT * FROM exam_score"))
    console.log( await db.all("SELECT * FROM exam_schedule"))
    console.log( await db.all("SELECT * FROM find_teacher"))
    console.log( await db.all("SELECT * FROM peer_study_assignments"))
    console.log( await db.all("SELECT * FROM module_assignment"))
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
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM exam_schedule");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});

// Show exam schedule data
router.get("/api/find-teacher", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM find_teacher");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});

// Show email preview data
router.get("/api/email-preview", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM email_preview");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});

// Show exam score data
router.get("/api/exam-score", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM exam_score");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});

// Show subject data
router.get("/api/subjects", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM subject");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});

//show news data
router.get("/api/news", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM news");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});

//download
router.post("/api/download", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM news");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});

// assignment
router.get("/api/assignment", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM module_assignment");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});


//show schedule data
router.get("/api/schedule", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM schedule");
            res.json(result);
        }, 500);
    } catch (e) {
        res.json(e);
    }
});

// peer study
router.get("/api/peer-study", async function (req, res, next) {
    try {
        setTimeout(async function () {
            let result = await db.all("SELECT * FROM peer_study_assignments");
            res.json(result);
        }, 500);
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
