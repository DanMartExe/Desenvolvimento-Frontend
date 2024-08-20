const mongoose = require('mongoose')

//forma de bolo
const usuarioSchema = mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
})

//região onde vou salvar meus 'usuarios'
const usuario = mongoose.model('usuarios', usuarioSchema)
//exportando 'tabela/coleção/coluna'
module.exports = usuario