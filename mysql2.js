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

// const sql = `create table devices(
//   id int auto_increment,
//   name varchar(255) not null,
//   brand varchar(255) not null,
//   description varchar(255) not null,
//   price int not null,
//   primary key(id)
// );`;

// const devices = [ //запись в таблицу
//     ["Bob", 'brand', 'description', 10021],
//     ["Alice", 'brand', 'description', 121],
//     ["Kate", 'brand', 'description', 10021123],
// ];
// const sql = `INSERT INTO devices(name, brand, description, price) VALUES ?`;
//
// connection.query(sql, [devices], function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });

// const sql = `UPDATE devices SET name=? WHERE name=?`;
// const data = ['Bab', 'Bob'];
// connection.query(sql, data, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });

// const sql = "DELETE FROM devices WHERE name=?";
// const data = ["Kate"]; // удаляем пользователей с именем Sam
// connection.query(sql, data, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });

connection.query("SELECT * FROM devices",
    function(err, results, fields) {
        console.log(err);
        console.log(results); // собственно данные
        // console.log(fields); // мета-данные полей
    });
connection.end();