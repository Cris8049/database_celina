var mysql = require('mysql');


const executeQuery = (query, callback, con) => con.query(query, callback)
const getUsers = (callback) => {
    var con = mysql.createConnection({
        host: 'sql768.main-hosting.eu',
        user: 'u196779987_pruebas',
        password: 'Pruebas1234!',
        database: 'u196779987_pruebas',
    })
    
    con.connect(function (err) {
        if (err) throw err;
        console.log("Conectado con MYSQL...");
      
    })

    executeQuery('SELECT * from `pruebas`', (err, rows) => {
        if (err) throw err
        callback(rows,con)
    },con)

    
}






module.exports = {
    executeQuery,
    getUsers,

    

};