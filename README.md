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

#### **Website**  ([React](https://reactjs.org/)  +  [JavaScript](https://www.javascript.com/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Dom](https://pt-br.reactjs.org/docs/react-dom.html)**
-   **[Axios](https://github.com/axios/axios)**
-   **[React Scripts](https://www.npmjs.com/package/react-scripts)**
