const res = require('express/lib/response');

module.exports = (app) => {
    let mysql = require('mysql');

    let connection = mysql.createConnection({ // criando uma variavel que recebe o metodo createConnection do mysql
        host: 'localhost',
        user: 'root',
        password: '1006',
        database: 'portal_noticias'
    });// valores que passamos numa função json para o mysql interpretar

    connetion.query('select * from noticias', (error, result) =>{//usando a variavel connection, fazemos uma query na noticias que espera um error e um resultado e retorna na consulta
        res.send(result);
    });


    app.get('/noticias',(req, res) => {
        res.render("noticias/noticia");

    });
};
//passa a variavel app como parametro para ser interpretada em app_ejs
