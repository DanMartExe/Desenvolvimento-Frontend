### Introdução a linguagem typescript
    TypeScript é uma linguagem de programação de alto nível, livre e de código aberto, desenvolvida pela Microsoft que adiciona tipagem estática com anotações de tipo opcionais ao JavaScript. Ela é projetada para o desenvolvimento de grandes aplicativos e transpila para JavaScript.

### Como instalar o typescript
    - Global -> npm install -g typescript
        OBS: de forma global é necessário  habilitar a execução de scripts
        no powershell aberto como adm, rodar o comando:
        - Set-ExecutionPolicy Unrestricted
    - Local -> npm install --save typescript
        OBS: De forma local é necessário configurar
```json
{
  "scripts": { 
    "tsc": "tsc",
    "tsc-init": "tsc --init",
    "tsc-watch": "tsc --watch"
  },
  "dependencies": {
    "typescript": "^5.5.4"
  }
}
```
    -npm install @angular/cli
    -npx @angular/cli

### Para Transpilar TS p/ JS:
    tsc arquivo.ts

### Para criar arquivo config TS:
    tsc --init

### Para criar em tempo real arquivos JS transpilados:
    tsc -- watch

    OBS: mudar no tsconfig,
      para os arquivos JS ficarem separados:
      "outDir": "./js"

      para separar arquivos TS (criar pastinha ts e mover arquivos TS para lá):
      "rootDir": "./ts",

### É possível codar online no site do Typescript:
[TypeScript Playground](https://www.typescriptlang.org/play/)