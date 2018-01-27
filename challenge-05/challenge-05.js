/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, "oi", true, undefined, null, ""]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc(arg) {
    return array
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunc(array)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newFunction(values, numbers) {
    return values[numbers]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newVar = [1, 'a', null, {a:1}, function() {return "haha"}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(newFunction(newVar, 0));
console.log(newFunction(newVar, 1));
console.log(newFunction(newVar, 2));
console.log(newFunction(newVar, 3));
console.log(newFunction(newVar, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
    var object = {
        nome1: {
            quantidadePaginas: 100,
            autor: "Roger",
            editora: "Crazy"
        },
        nome2: {
            quantidadePaginas: 50,
            autor: "Atar",
            editora: "Lobster"
        },
        nome3: {
            quantidadePaginas: 10,
            autor: "Tonner",
            editora: "HP"
        }
    }
    return name == undefined ? object : object[name]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
var livro = "nome1"
console.log(book(livro))

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var pages = "O livro " + livro + " tem " + book("nome1")["quantidadePaginas"] + " páginas!"
console.log(pages)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var autor = "O autor do livro " + livro + " é " + book("nome1")["autor"] + "."
console.log(autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var editora = "A editora do livro " + livro + " é " + book("nome1")["editora"] + "."
console.log(editora)
