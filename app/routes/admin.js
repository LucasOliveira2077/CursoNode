module.exports = (app) => {
    app.get('/formulario_noticias',(req, res) => {
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar',(req, res) => {
        let noticias = req.body;
        res.send(noticias);
    });    

};