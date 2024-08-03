const express = require('express')
const app = express()
const porta = 5000

// "banco de dados":
let produtos = [
    {
        nome: "Bolu de morangu",
        valor: 10000,
        descricao: "Hmmmm bolo de morangu melhor bolo do mundo",
        imagem: "https://ofner.vtexassets.com/arquivos/ids/157361/bolo-morango.png?v=638168270663900000"
    },
    {
        nome: "Bolo de chocolate",
        valor: 200,
        descricao: "Hmmmm bolo top d+",
        imagem: "https://www.estadao.com.br/resizer/v2/FIVYQFU6J5ND3PYRA6XQHR4NW4.jpg?quality=80&auth=04a93b8f4c288302da64fd8a96da7bb7cc11dff70430e4ba66587218d5b6011f&width=720&height=503&focal=0,0"
    },
    {
        nome: "Bolo de cenoura",
        valor: 300,
        descricao: "Hmmmm bolo top muito bom",
        imagem: "https://p2.trrsf.com/image/fget/cf/942/530/images.terra.com/2023/03/11/bolo-de-cenoura-8-1jy24u01fqfdu.jpg"
    },
]

// '/', '/jogos', etc... refere-se a rota, sendo '/' a rota raíz
// p/ rota '/' dispara a função abaixo:
app.get('/', (requisicao, resposta) => {
    try {
        //p trabalhar com json já existe a função (get serviria tbm):
        return resposta.json(produtos).status(200)
    } catch(error) {
        return resposta.json({message: "Operação invalida"}).status(400)
    }
})

app.get('/jogos', (requisicao, resposta) => {
    let queryUrl = requisicao.query
    console.log(requisicao.query)

    return resposta.json(queryUrl).status(200)
})

app.get('/comida', (requisicao, resposta) => {
    return resposta.json({nome: "macarraão"}).status(200)
})

app.listen(porta, () => {
    console.log(`Server listening on http://localhost:${porta}`)
})
