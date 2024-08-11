const express = require('express')
const app = express()
const port = 5010

// libera json pra trafegar na rede
app.use(express.json())

// let database = [{nome: 'a'}, {nome: 'b'}, {nome: 'c'}]
// let pessoa = database.find(pessoa => pessoa.nome == 'mateus')

let database = []

// ENDPOINT
app.get('/', (req, res) => {
    try {
        return res.status(200).json({ produtos: database })
    } catch (error) {
        return res.status(500).json({mesagem: error})
    }
})

// ENDPOINT
app.get('/buscar-produto-por-id', (req, res) => {
    try {
        let produtoId = req.query.id
        let produto = database.find(produto => produto.id == produtoId)
        if (produto == undefined) {
            return res.status(404).json({mesagem: "Produto não encontrado"})
        }

        return res.status(200).json({ produto: produto})
    } catch (error) {
        return res.status(500).json({mesagem: error})
    }
})

// ENDPOINT
app.post('/adicionar-produto', (req, res) => {
    try {
        let produto = {
            nome: req.body.nome,
            valor: req.body.valor,
            descricao: req.body.descricao,
        }

        database.push(produto)

        return res.status(201).json({mensagem: 'produto adicionado com sucesso!'})
    } catch (error) {
        return res.status(500).json({mesagem: error})
    }
})

app.listen(port, () => {
    console.log('Servidor executando!')
    console.log(`http://localhost:${port}`)
})