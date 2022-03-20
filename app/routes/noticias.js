//funçao para impórtar a database connection para app 
let databaseConnection = require('../../config/databaseConnection');

module.exports = (app) => {
let connection = databaseConnection();//conection recebe o require pra database cenection
    app.get('/noticias',(req, res) => {
        connection.query('select * from noticias', (error, result) =>{
          res.render("noticias/noticias", {noticias : result});
        });
    
    });
           
};

