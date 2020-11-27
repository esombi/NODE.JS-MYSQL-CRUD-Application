const mysql = require('mysql');

var con = mysql.createConnection ({
    host:"localhost",
    user: "root",
    password: "root",
    database: "crudNode",
    multipleStatements: true
});

con.connect(function(err) {
    if(err) 
        throw err;
    console.log("Connected to database");
    /*
    con.query("CREATE DATABASE IF NOT EXISTS crudNode", function(err, result){
        if(err)
            throw err;
        console.log("Database Created");
    });
*/
    let create_table = `create table if not exists student(
                        id int primary key auto_increment,
                        name varchar(255)not null,
                        age int(11),
                        class varchar(20)not null

    )`;
    con.query(create_table, function(err, results, fields){
        if(err)
            throw err;
    })
});

module.exports = con;