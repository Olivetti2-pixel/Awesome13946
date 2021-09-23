var server = require('./config/server')
var app = server.app
var porta = server.porta

//config database com acesso ao mongoDBaTlas
var mongoose = require('mongoose')
var conexao = ()=>{
    var caminho = mongoose.connect('mongodb+srv://awesome:palmeiras2@cluster0.koij7.mongodb.net/mongoatlas?retryWrites=true&w=majority')
}
var schema = mongoose.Schema
var depoimentos = new schema({
    nome:String,
    cargo:String,
    mensagem:String
})
var documentos = mongoose.model('depoimentos',depoimentos)
//fim das configurações do database

var porta = 3030

app.set('view engine', 'ejs')
app.set('views', './views')

//rota para abrir o arquivo index.ejs
app.get('/',(req,res)=>{
    conexao()
    documentos.find().limit(3).sort({'_id':-1})
    .then((documentos)=>{
        console.log(documentos)
        res.render('index',{documentos})
    })
})

app.listen(porta)