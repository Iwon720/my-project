const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodedb",
    password: "123qwe"
});

connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

// const users = [ //запись в таблицу
//     ["Bob", 22],
//     ["Alice", 25],
//     ["Kate", 28]
// ];
// const sql = `INSERT INTO users(name, phone) VALUES ?`;
//
// connection.query(sql, [users], function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });

// const sql = `UPDATE users SET phone=? WHERE name=?`; //update, people, update
// const data = [34, "Tom"];
// connection.query(sql, data, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });

// const sql = "DELETE FROM users WHERE name=?"; //delete
// const data = ["AAA"]; // удаляем пользователей с именем Sam
// connection.query(sql, data, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });

connection.query("SELECT * FROM users",
    function(err, results, fields) {
        console.log(err);
        console.log(results); // собственно данные
        // console.log(fields); // мета-данные полей
    });
connection.end();