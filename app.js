//criando servidor que responde a requisições com express e ejs

let app = require('./config/server');
//estou importando as config do server.js pra variavel 'app'

//const rotaNoticias = require('./app/routes/noticias')(app);
//const rotaHome = require('./app/routes/home')(app);
//const rotaFormularioNoticias = require('./app/routes/formulario_noticias')(app);

app.listen(3000, (req, res) => { // ja fica escutando na porta 3000
    console.log('servidor ligado');//printa no console(cmd)
});


