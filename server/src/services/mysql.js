const mysql = require('mysql')


const db = mysql.createPool({
    host : '217.21.95.104',
    user:'u391245239_asia_root',
    password:'Classvoid29',
    database: 'u391245239_asia_pacific',
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