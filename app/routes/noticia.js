module.exports = (app) => {
  
    app.get('/noticia',(req, res) => {
      
        let connection = app.config.databaseConnection();
        let noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, (error, result) =>{
          res.render("noticias/noticia", {noticia : result});
        });
    
    });
         
};