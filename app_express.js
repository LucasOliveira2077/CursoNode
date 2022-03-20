let express = require('express');//require retorna o express
 
let app = express();//declarando app pra receber express

app.get('/',(req, res) => {//url padrão
    res.send("<html><body><h1>portal de noticias</h1></body></html>");//resposta enviada do server ao cliente
});

app.get('/games',(req, res) => {// função es6
    res.send("<html><body><h1>portal de games</h1></body></html>");
});

app.get('/tecnologia',(req, res) => {
    res.send("<html><body><h1>portal de tecnologia</h1></body></html>");
});


app.listen(3000, (req, res) => { // ja fica escutando na porta 3000
    console.log('servidor rodando com express');//printa no console(cmd)
});
 

