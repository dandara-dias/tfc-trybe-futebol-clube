<p align="center">
    <img src="negative_logo.png" height="120" width="200" alt="TFC" />
</p>

<p align="center">⚽ Aplicação responsável pela serie A do campeonato TFC - Trybe Futebol Clube ⚽ Em construção 🚧</p>

<p align="center">
• <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#%EF%B8%8F-funcionalidades">Features</a> • 
 <a href="#-demonstra%C3%A7%C3%A3o">Demonstração</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#%EF%B8%8F-autora">Autora</a> •
</p>

## 💻 Sobre o projeto

O TFC é um site informativo sobre partidas e classificações de futebol. Começando pela API, foram desenvolvidos alguns endpoints (seguindo os princípios REST) que estão conectados a um banco de dados.

Esta é uma aplicação dockerizada em Node.js + Typescript usando o pacote sequelize.

## ⚙️ Funcionalidades

- [x] Uma pessoa pode fazer login como admin do site enviando:
  - [x] um email válido
  - [x] uma senha válida

- [x] É possível acessar a tela de partidas e:
  - [x] ver uma lista com todas as partidas
  - [x] filtrar por partidas em andamento
  - [x] filtrar por partidas finalizadas

- [x] O admin pode:
    - [x] inserir partidas, desde que estas não sejam com times iguais ou com times não disponíveis na tabela 
    - [x] adicionar e editar partidas em andamento
    - [x] finalizar partidas em andamento 
    - [x] adicionar partidas finalizadas

- [x] É possível acessar a área de classificação e:
  - [x] ver uma lista da classificação geral dos times
  - [x] ver a classificação dos times quando mandantes
  - [x] ver a classificação dos times quando visitantes 

## 🎨 Demonstração

<p align="center">
  <img alt="TFC-app" title="#TFC" src="tfc.gif" width="800px">
</p>

## 🚀 Como executar o projeto

Este projeto é divido em quatro partes:
1. Backend (pasta app/backend) 
2. Frontend (pasta app/frontend)
3. DB (arquivo .sql na raíz do projeto)
4. Testes (pasta app/tests)

Tanto o Frontend quanto o Backend precisam que o MySQL esteja ativo para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySQL](https://www.mysql.com/), [Docker](https://www.docker.com/). 

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/), bem como uma ferramenta visual para trabalhar com o banco de dados, como o [MySQL Workbench](https://www.mysql.com/products/workbench/).

#### 🗃️ Rodando o Banco de Dados

``` bash
# Clone o repositório
$ git clone git@github.com:dandara-dias/tfc-trybe-futebol-clube.git

# Entre na pasta do repositório que você acabou de clonar
$ cd tfc-trybe-futebol-clube

# Copie o conteúdo do arquivo db.example.sql

# No MySQL Workbench, cole o conteúdo e clique em executar para criar o banco
```
#### 🎲 Rodando a aplicação

``` bash
# Clone o repositório
$ git clone git@github.com:dandara-dias/tfc-trybe-futebol-clube.git

# Entre na pasta do repositório que você acabou de clonar
$ cd tfc-trybe-futebol-clube

# Instale as dependências
$ npm install

# Inicie seu docker-compose
$ npm run compose:up

# A aplicação iniciará na porta 3000 - acesse http://localhost:3000 
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [JavaScript](https://www.javascript.com/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Dom](https://pt-br.reactjs.org/docs/react-dom.html)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React Scripts](https://www.npmjs.com/package/react-scripts)**

> Veja o arquivo [package.json](https://github.com/dandara-dias/tfc-trybe-futebol-clube/blob/main/app/frontend/package.json)

#### **Server** ([Node.js](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[BCrypt](https://www.npmjs.com/package/bcrypt)**
-   **[JWT](https://jwt.io/)**
-   **[Sequelize](https://sequelize.org/)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[MySQL2](https://www.npmjs.com/package/mysql2)**

> Veja o arquivo [package.json](https://github.com/dandara-dias/tfc-trybe-futebol-clube/blob/main/app/backend/package.json)

#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)**
-   Markdown:  **[Rocketseat](https://blog.rocketseat.com.br/como-fazer-um-bom-readme/)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Favicon:  **[Icons8](https://icons8.com.br/icons/set/favicon)**
-   Paleta de cores: **[Coolors](https://coolors.co/)**
-   Fontes:  **[Indie Flower](https://fonts.google.com/specimen/Indie+Flower?query=indie+flower)**,  **[Ubuntu Mono](https://fonts.google.com/specimen/Ubuntu+Mono?query=Ubuntu+mono)**, **[ABeeZee](https://fonts.google.com/specimen/ABeeZee?query=ABeeZee)**, **[Nunito](https://fonts.google.com/specimen/Nunito?query=Nunito)**, **[Varela Round](https://fonts.google.com/specimen/Varela+Round?query=Varela+Round)**, **[Hubballi](https://fonts.google.com/specimen/Hubballi?query=Hubballi)**

## 🦸‍♀️ Autora

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/85723209?v=4" width="100px;" alt="avatar-picture"/>
 <b>Dandara Dias</b> 🎀
 
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/dandara-dias/)](https://www.linkedin.com/in/dandara-dias/) 
<a href = "mailto:dandaradias.contato@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
