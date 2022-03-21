let mysql = require('mysql');

let connMySQL = () =>{
    console.log('conexão com servidor iniciada');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1006',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    console.log('o autoload carregou o modulo de conexao com o banco de dados');
    return connMySQL;
    
}
