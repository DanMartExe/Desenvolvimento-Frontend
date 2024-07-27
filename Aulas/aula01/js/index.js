const http = require('http')
const port = 5000

const produtos = [
    { nome: 'Bolu de morangu', valor: 10000, imagem: 'https://img.cybercook.com.br/receitas/833/bolo-de-morango-e-chantilly.jpeg'},
    { nome: 'Bolo de chocolate', valor: 300, imagem: 'https://bakeandcakegourmet.com.br/uploads/site/receitas/bolo-de-chocolate-facil-e-barato-rspxk8nc.jpg'},
]
const requestHandler = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.write(JSON.stringify(produtos))
    return res.end()
}

const server = http.createServer(requestHandler)

server.listen(port, () => {
    console.log('Servidor rodando na porta 5000')
})