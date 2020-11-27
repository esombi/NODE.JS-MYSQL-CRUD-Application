const express = require('express');
const con = require('../connection');
const Router = express.Router();
const connect = require('../connection');

//get all student details
Router.get('/', (req, res) =>{
    con.query("SELECT * FROM student", (err, rows, fields)=> {
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});

//get a student detail
Router.get('/:id', (req, res) => {
    con.query("SELECT * FROM student WHERE id= ?", [req.params.id], (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});


//insert a student
Router.post('/', (req, res) => {
  let student = req.body;
  var sql = "SET @id =?; SET @name= ?;SET @age=?;SET @class=?; CALL AddOrEdit(@id, @name, @age, @class);";
  con.query(sql, [student.id, student.name, student.age, student.class], (err, rows, fields) => {
    if(!err)
    rows.forEach(element => {
        if(element.constructor == Array)
            res.send('New Student Id : ' + element[0].id);
    });
    else
    console.log(err);
  })
});

//update student details
Router.put('/', (req, res) => {
    let student = req.body;
    var sql = "SET @id =?; SET @name= ?;SET @age=?;SET @class=?; CALL AddOrEdit(@id, @name, @age, @class);";
    con.query(sql, [student.id, student.name, student.age, student.class], (err, rows, fields) => {
        if(!err)
            res.send('Student Updated successfully');
        else
        console.log(err);
    })
});

//delete a student
Router.delete('/:id', (req, res) =>{
    con.query("DELETE FROM student WHERE id=?", [req.params.id], (err, rows, fields) =>{
        if(!err)
        res.send("Student deleted successfully");
        else
        console.log(err);
    })
});

    
module.exports = Router;