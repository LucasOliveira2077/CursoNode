var http = require('http');//a variavel http recebe http e o require importa a biblioteca http na variavel

var server = http.createServer( function (req, res){ // variavel server escuta no servidor criado

    var categoria = req.url;//variavel categoria recebe a url da requisição
    
    if(categoria == '/games'){// se a variavel categoria receber /games no url..
        res.end("<html><body><h1>Portal de Jogos</h1></body></html>");//retorna o texto portal de jogos no localhost:3000
        
    } else if(categoria == '/moda'){
        res.end("<html><body><h1>Noticias de Moda</h1></body></html>");

    } else if(categoria == '/esportes'){
        res.end("<html><body><h1>Noticias de Esportes</h1></body></html>");
        
    } else {
        res.end("<html><body>Portal de Noticias</body></html>");
    }
    
});

server.listen(3000);