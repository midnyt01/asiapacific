const mysql = require('mysql')


const db = mysql.createPool({
    host : 'localhost',
    user:'root',
    password:'',
    database: 'asia_pacific_logistics',
    connectionLimit: 200 
})


function mysqlConnect () {
    db.getConnection((err) => {
        if (err) throw err
        console.log('mySQL is now connected')
    })
}

module.exports = {
    db,
    mysqlConnect
};