module.exports = (app) => {
    app.get('/',(req, res) => {//url padrão
        res.render("home/index");//resposta enviada do server ao cliente lendo o arquivo ejs dentro do diretorio

    });
};
