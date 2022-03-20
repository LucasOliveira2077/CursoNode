let databaseConnection = require('../../config/databaseConnection');

module.exports = (app) => {
    let connection = databaseConnection();
        app.get('/',(req, res) => {//url padrão
            connection.query('select * from home', (error, result) =>{
                res.render("home/index", {index : result});//resposta enviada do server ao cliente lendo o arquivo ejs dentro do diretorio
        });
    });
};
