//arquivos de configuraçao para serem usados no nosso servidor
let express = require('express');//require retorna o express
 
let app = express();//declarando app pra receber express

app.set('view engine', 'ejs');

app.set('views', './app/views');

module.exports = app;