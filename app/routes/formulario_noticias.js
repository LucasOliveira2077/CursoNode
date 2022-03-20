module.exports = (app) => {
    app.get('/formulario_noticias',(req, res) => {// função es6
        res.render("admin/form_add_noticia");

    });
};