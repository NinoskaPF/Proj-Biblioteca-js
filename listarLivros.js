//verificando la disponibilidad de libros dentro del sistema.
//Permite visualizar todas las informaciones de lobros registrados en el sistema.

import dadosDeLivros from "./dadosDeLivro.js";

function listarLivros() {

    console.log("lista de livros");

dadosDeLivros.forEach((livro,index) =>{
let disponibilidade;
if (livro.desponivel) {
    if (livro.disponivel) {
        disponibilidade = "Sim";
        } else {
disponibilidade = "Não";
        }
console.log(`Livro ${index+1}
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Categoria:${livro.categoria}
    Páginas: ${livro.paginas}
    Disponível: ${livro.disponibilidade}
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `);
    }
});
}
 export default listarLivros;
 