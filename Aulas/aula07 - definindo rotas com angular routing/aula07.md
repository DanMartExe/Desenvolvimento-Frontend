# Definindo rotas com Angular Routing

### Criar uma aplicação angular
    ng new segundo-programa --no-standalone

### Limpeza
    apagar .spec (não vamos utilizar agora)

### Executar a aplicação
    ng serve --open | ng s -o

### Criar componentes
- `ng generate component components/views/home`
- `ng generate component components/views/login --skip-tests`
(--skip-tests p/ n criar .spec)
- `ng g c components/shared/navbar`

### ROTAS DO FRONTEND NÃO SÃO ROTAS DO BACKEND
    [Frontend] /        |   [Backend] /
    [Frontend] /login   |   [Backend] /login-auth

### Links úteis
- [icons generate](https://www.favicon.cc/)
- [free icons](https://icons8.com.br/icons/set/website)
- [Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)