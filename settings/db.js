const mysql = require('mysql')
const config = require('../config.js')

const connection = mysql.createConnection({
    host: config.HOST, 
    user: config.DBUSER,
    database: config.DBNAME,
    password: config.DBPASSWORD
})

connection.connect((err) =>{
    if(err){
        return console.log("Подключение установлено")
    } else {
        return console.log("Подключение установлено")
    }
})

module.exports = connection