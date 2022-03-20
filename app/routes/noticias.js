module.exports = (app) => {
    app.get('/noticias',(req, res) => {
        res.render("noticias/noticia");

    });
};
//passa a variavel app como parametro para ser interpretada em app_ejs
