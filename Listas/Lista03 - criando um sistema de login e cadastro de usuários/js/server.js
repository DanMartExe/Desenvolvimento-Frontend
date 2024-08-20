const express = require('express')
const app = express()
const porta = 5000

app.use(express.json())

let database = []

app.post('/cadastrar-usuario', (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            confirmacaoSenha: req.body.confirmacaoSenha
        }

        if (database.find(emailDataBase => emailDataBase.email === usuario.email)) {
            return res.status(409).json({ mensagem: "Email já está sendo utilizado" })
        } else if (usuario.senha !== usuario.confirmacaoSenha) {
            return res.status(400).json({ mensagem: "As senhas devem ser iguais" })
        } else {
            let novoUsuario = {
                nome: usuario.nome,
                email: usuario.email,
                senha: usuario.senha
            }

            database.push(novoUsuario)
            return res.status(200).json({ mensagem: "cadastro realizado com sucesso!!" })
        }

    } catch (error) {
        return res.status(500).json({ mensagem: error })
    }
})

app.post('/login', (req, res) => {
    try {
        let login = {
            email: req.body.email,
            senha: req.body.senha
        }

        if (!(database.find(emailDataBase => emailDataBase.email === login.email))) {
            return res.status(400).json({ mensagem: "Usuário ou senha inválidos" })
        } else if (!(database.find(senhaDataBase => senhaDataBase.senha === login.senha))) {
            return res.status(400).json({ mensagem: "Usuário ou senha inválidos" })
        }
        return res.status(200).json({ mensagem: "Login bem sucedido" })
    } catch (error) {
        return res.status(500).json({ mensagem: error })
    }
})

app.get('/buscar-todos-usuarios', (req, res) => {
    return res.status(200).json(database)
})

app.listen(porta, () => {
    console.log(`Server listening at http://localhost:${porta}`)
})