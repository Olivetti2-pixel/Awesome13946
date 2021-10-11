var express = require('express')
var app = express()

//config database com acesso ao mongoDBaTlas
var mongoose = require('mongoose')
var conexao = ()=>{
    var caminho = mongoose.connect('mongodb+srv://awesome:palmeiras2@cluster0.koij7.mongodb.net/mongoatlas?retryWrites=true&w=majority')
}
var Schema = mongoose.Schema
var depoimentos = new Schema({
    nome:String,
    cargo:String,
    mensagem:String
})
var documentos = mongoose.model('depoimentos',depoimentos)
//fim das configurações do database

var porta = process.env.PORT || 5555
module.exports = (app, porta)

//config
app.set('view engine', 'ejs')
app.use(express.static('./'))

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