var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
})

module.exports = connection.connect(function(err){
    if (err) {
        console.log('error connecting:' + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

})
