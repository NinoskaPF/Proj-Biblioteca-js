# Proj-Biblioteca-js
Sistema de gerenciamento de biblioteca desenvolvido para digitalizar e automatizar processos antes realizados manualmente. O projeto facilita o controle de livros, empréstimos e usuários, tornando a gestão mais rápida, organizada e eficiente.

## 📚 Sistema de Gerenciamento de Biblioteca

# 📌 
Sobre o projeto Este projeto consiste em um sistema de gerenciamento de biblioteca desenvolvido em JavaScript. A aplicação permite cadastrar, buscar, listar, realizar empréstimos e devoluções de livros, além de apresentar estatísticas sobre o acervo.

# 🎯 
O objetivo deste projeto é desenvolver um sistema de gerenciamento de biblioteca utilizando JavaScript e Node.js, permitindo digitalizar e organizar processos relacionados ao cadastro, consulta, empréstimo e devolução de livros.

O projeto também tem como objetivo aplicar conceitos fundamentais de programação, modularização de código e controle de versão com Git e GitHub.

# 🚀 
Funcionalidades - Cadastrar novos livros; - Listar todos os livros; - Buscar livros pelo título; - Mostrar livros disponíveis; - Realizar empréstimos; - Realizar devoluções; - Exibir estatísticas da biblioteca.

## 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Git
- GitHub

## 📂 Estrutura do projeto

Proj-Biblioteca-js
│
├── index.js
├── Livro.js
├── dadosDeLivros.js
├── listarLivros.js
├── buscarLivro.js
├── listarDisponiveis.js
├── cadastrarLivro.js
├── cadastrarNovoLivro.js
├── realizarEmprestimo.js
├── realizarDevolucao.js
└── exibirEstatisticas.js

## 🧠 Conceitos aplicados 
- Classes e objetos; 
- Arrays de objetos;
- Funções; 
- Condicionais; 
- Laços de repetição; 
- Métodos de array; 
- Manipulação de strings; 
- Importação e exportação de módulos; 
- Organização de código.

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

Node.js
npm (instalado junto com o Node.js)
Git

## ▶️ Como executar

Para iniciar o sistema, execute:

     npm start

O sistema será executado no terminal e apresentará o menu principal da biblioteca.

Após iniciar, escolha uma das opções disponíveis:

## 📋 Menu do sistema

1 - Listar livros
2 - Buscar livro
3 - Listar livros disponíveis
4 - Cadastrar livro
5 - Realizar empréstimo
6 - Realizar devolução
7 - Exibir estatísticas
0 - Sair

## 📚 Funcionalidades

# 📖 Listagem de livros

Permite visualizar todos os livros cadastrados na biblioteca, apresentando informações como título, autor, categoria, quantidade de páginas e disponibilidade.

# 🔎 Busca de livros

Permite buscar livros cadastrados utilizando informações como título ou outros dados disponíveis no sistema.

# ✅ Listagem de livros disponíveis

Exibe somente os livros que estão disponíveis para empréstimo.

# ➕ Cadastro de livros

Permite cadastrar novos livros no sistema, adicionando suas informações à base de dados.

# 📤 Empréstimo de livros

Permite realizar o empréstimo de um livro disponível e atualizar seu status de disponibilidade.

# 📥 Devolução de livros

Permite registrar a devolução de um livro e atualizar novamente sua disponibilidade.

# 📊 Estatísticas

Apresenta informações gerais sobre os livros cadastrados e o estado atual da biblioteca.

## 🌿 Estrutura de branches

O desenvolvimento do projeto foi organizado utilizando branches para separar as diferentes funcionalidades:

main — versão principal e integrada do projeto;
feature/configuracao-projeto — configuração inicial do projeto;
feature/classe-livro — criação da classe Livro;
feature/dados-livros — criação da base de dados dos livros;
feature/listagem-livros — funcionalidade de listagem;
feature/buscar-livro — funcionalidade de busca;
feature/cadastro-livros — cadastro de novos livros;
feature/emprestismo-devolucao — empréstimo e devolução de livros;
feature/estatisticas — estatísticas da biblioteca;
feature/menu-integracao — integração das funcionalidades ao menu principal.

As funcionalidades foram desenvolvidas separadamente e posteriormente integradas à branch main.


👤 Autor
Ninoska Palmares