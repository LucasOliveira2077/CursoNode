let mysql = require('mysql');

module.exports = () => {//exportando mysql
    return mysql.createConnection({ 
        host: 'localhost',
        user: 'root',
        password: '1006',
        database: 'portal_noticias'
    });
};