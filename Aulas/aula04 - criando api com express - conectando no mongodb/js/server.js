const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 8050
const connectionString = 'mongodb+srv://Danmartexe:v2AupK8rbPmA1aF6@bancodedados.nf0a3.mongodb.net/'
//importando Schema
const Usuario = require('./models/users')

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        // async e await: aguarda o recurso ser carregado antes de liberar
        let usuarios = await Usuario.find()
        return res.status(200).json({ users: usuarios })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }
})

app.post('/cadastrar-usuario', async (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            //pesquisar Bcrypt nodejs no site NPM, precisa estar criptograda no bd
            //base64 n é criptografia
            senha: btoa(req.body.senha)
        }

        await Usuario.create(usuario)
        return res.status(201).json({ message: 'Usuario cadastrado com sucesso!' })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }
})

// criar função reutilizavel
// async function verificarUsuarioExisteNoBanco(email) {
//     let usuario = await Usuario.findOne({ email: email })

//     if(usuario === null) {
//         return true
//     }
//     return false
// }

app.post('/login', async (req, res) => {
    try {
        let usuario = await Usuario.findOne({ email: req.body.email })

        if (usuario === null) {
            return res.status(404).json({ message: 'Usuario ou senha invalido' })
        }

        return res.status(200).json({ message: 'Login success', token_acces: Math.floor(Math.random() * 100000000) })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }
})

mongoose.connect(connectionString, {
    dbName: 'BancoDeDados'
}).then(() => {
    console.log('MongoDB UP!')
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log('Falha ao se conectar com mongoDB')
    console.log(error)
})