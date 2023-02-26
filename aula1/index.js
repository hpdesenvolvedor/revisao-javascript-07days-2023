// VARIÁVEIS - cameCase - let e const
/*
let firstname = "Henrique";
let lastName = "Nunes";


console.log(firstname);
console.log(lastName);


//-----------------------------------------------------------
//VARIÁVEIS - PRIMITIVOS - string, number, boolean, undefined, null

let itemName = 'Pen';  //string
let number = 3;             //number
let itemAvaible = true;     //boolean
let itemColor =             //undefined
itemName = null;            //null


--------------------------------------------------------------------
//VARIÁVEIS - REFERENCIA - objects  - array, functions
//OBJECTS
let itemName = 'Pen';  
let itemPrice = 3;             
let itemAvaible = true;     
let itemColor = 'Red'       

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvaible: true,
    itemColor: 'Red'
}

pen.itemColor = 'blue'  //para mudar a cor

console.log(pen);

-------------------------------------------------------------------
// ARRAY

let friends = ['Marcos', 'Silvia', 'Elisa'];
friends[2] = 'Junior'   //para substituir
console.log(friends)

-----------------------------------------------------------------
// FUNTION

function saleStatus(status, total) {
    console.log('Transaction ' + status + '! Total amount: $' + total)

}

saleStatus('approved', 30);


function porcentagem10(valor) {
    return valor - (valor * 10 / 100)
}

console.log(porcentagem10(20))


------------------------------------------------------------
//  OPERADORES ARITMETICOS 

+ Soma
- Subtração
* Multiplicação
/ Divisão 
** Potência
% Resto da divisão
++ incrementar
-- decremeto

Ex.:

let num1 = 3
let num2 = 2

let total = num1 + num2

console.log(total++)
console.log(total)

-------------------------------------------------------------------
// OPERADORES DE COMPARAÇÃO

let num1 = 3

console.log(num1 > 0) true
console.log(num1 < 0) false
console.log(num1 >= 0) true
console.log(num1 <= 0) false
console.log(num1 >= 3) true
console.log(num1 <= 3) true
console.log(num1 === 3) true
console.log(num1 !== 3) false

--------------------------------------------------------------------
// OPERADORES DE IGUALDADE

let num1 = '1'
let num2 = 1

console.log(num1 === num2) false (ele verificar valor e tipo)
console.log(num1 == num2) true   (verifica apenas o valor)

--------------------------------------------------------------------
// OPERADORES TERNÁRIOS

let driver = 120
let speed = driver > 110 ? 'above' : 'below';
console.log(speed)

----------------------------------------------------------------------
// OPERADORES LÓGICOS

AND -> E -> &&
OR -> OU -> ||
NOT -> NÃO -> ! 



let temIdadeMinima = true
let temTituloEleitor = true

let podevotar = temIdadeMinima && temTituloEleitor
console.log(podevotar)

let podeviajar = !podevotar;
console.log(podeviajar)

---------------------------------------------------------------------------------
// OPERADORES LÓGICOS COM STRING

let corCliente = 'white'   //caso aqui for undefined ele dará a cor seguinte que será 'black'
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque

console.log(corVendida)

---------------------------------------------------------------------
// PRECEDENCIA DOS OPERADORES

let num1 = (3 + 4) * 2
console.log(num1)


let driveSpeed = 30

if (driveSpeed > 110) {
    console.log('Dirigindo rápido')
} else if (driveSpeed > 40 && driveSpeed < 110) {
    console.log("Dirigindo ok")
} else if (driveSpeed) {
    console.log("Abaixo da velocidade")
};

EX 2:

let pista = 39

if (pista >= 220) {
    console.log('acima da velocidade')
}else if (pista < 220 && pista > 80){
    console.log('velocidade normal')
}else if (pista <= 80 && pista >= 40){
    console.log('Velocidade em zona')
}else if(pista < 40){
    console.log('Abaixo da velocidade');
}

-----------------------------------------------
// SWITCH/CASE


let airport = 'PNZ'

switch (airport) {
    case ('PNZ'):
        console.log('Petrolina')
        break

    case ('GRU'):
        console.log('São Paulo - Guarulhos')
        break

    default:
    console.log('Não encontramos sua busca')
}

----------------------------------------------
// FOR LOOP


for (i = 0; i <= 10; i++) {
    console.log('Número ', i)
}

-------------------------------------------
// WHILE


i = 1

while (i <= 10) {
    console.log('Número ', i)
    i++
}

// DO WHILE


i = 1

do{
    console.log('Número ', i)
    i++
} while (i <= 10)

-------------------------------------------
// FOR IN


const meucarro = {
    modelo: 'HRV',
    ano: 2023,
    cor: 'Branco',
    km: 0
}
for (let i in meucarro)
console.log(i, meucarro[i])


// OBJETO

const caixadesom = {
    cor: 'preto',
    marca: 'i2go',
    acessorio: 'corda',
    entradas:{
        usb: 'para audio',
        carregamento: 'entrada normal',
        cartão: 'sd'
    },
    printCaixadesom: function(){
        console.log('Printing...')


    }
}

caixadesom.printCaixadesom()

--------------------------------------------------------
// FACTORY

function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic', 'James', 306)
const book2 = createBook('Universo', 'Pedro', 450)

console.log(book1, book2)

---------------------------------------------------
// ADICIONANDO PROPRIEDADES - cor do livro

function createBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic', 'James', 306)
const book2 = createBook('Universo', 'Pedro', 450)

book1.color = 'red'             

console.log(book1, book2)

-----------------------------------------
// CONSTRUCTOR


function CreateBook (title, author, pages) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
}

let book1 = new CreateBook ('A vida longa', 'Henrique', 450 );
console.log(book1)


function MoveisQuarto (guardaroupa, cama, tv){
    this.moveisRoupas = guardaroupa;
    this.moveisCama = cama;
    this.moveistv = tv
}

let quartocompleto = new MoveisQuarto ('Guarda Roupa Branco', 'Box', 'Smart');
console.log(quartocompleto)

--------------------------------------------
// ARRAYS

let friends = ['Marcos', 'Silvia', 'Elisa']
friends[1] = 'Junior'     Para substituir alguém da lista
console.log(friends)



--------------------------------------
// ADICIONANDO VALORES NO ARRAY


const num = [7, 8, 9]

num.push(10, 11, 12)    //para adicionar no final

num.unshift(1, 2, 3)     //para adicionar no incício

num.splice(3, 0, 4, 5, 6)  //para adicionar no meio: 1 indica o número que irá a partir dele, 2 se vai excluir algo depois, 3 colocar o que vai adicionar

console.log(num)

---------------------------------------------------
// Localizando itens em uma Array primitiva

const num = [6, 7, 8, 9]

console.log(num.indexOf(8))


---------------------------------------------------
// Localizando itens em uma Array de REFERENCIA

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.find(function(movie) {
    return movie.movieName == 'The Matrix'
}))

-----------------------------------------------------
// ARROW FUNCTION

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.find (movie  => movie.movieName == 'The Matrix'))


---------------------------------
// REMOVENDO ITENS DA ARRAY

const num = [ 5, 6, 7, 8]
const final = num.pop()    //para remover o último item
const final = num.shift()  // para remover o primeiro item
const final = num.splice(2, 2 ) // você coloca o número a partir

console.log(num)
console.log(final)

---------------------------------
// ESVAZIANDO UMA ARRAY

const num = [ 5, 6, 7, 8]

num = []
num.length = 0
num.splice(0, num.length)

console.log(num)

----------------------------------------
// CONCATENANDO UMA ARRAY

let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters)

console.log(all)


let cores = ['azul', 'branca', 'preta', 'verde']
let number = [1, 2, 3, 4, 5]

juncaoArrays = cores.concat(number)
juncao = juncaoArrays.slice(3, 5)

console.log(juncaoArrays)
console.log(juncao)

-------------------------------------
// JOIN ARRAY

let clients = ['Andre', 'Jose', 'Marcela']

console.log(clients)

let clientsJoin = clients.join(', ')

console.log(clientsJoin)

// REVERTENDO UM ARRAY


let clients = ['Andre', 'Marcela', 'Jose']

clients.sort()       coloca em ordem alfabética
clients.reverse()       faz o inverso do que estava

console.log(clients)

// VERIFICANDO ELEMENTOS NA ARRAY

const tempLondon = [18, 13, 8, 2]

const tempPositive = tempLondon.every(function(value){
    return value >= 0
})
console.log(tempPositive)

------------------------------------------------
FILTRANDO UMA ARRAY COM O FILTER


const tempLondon = [18, 13, 8, 2]

const tempPositive = tempLondon.filter (value => value >= 0)

console.log(tempPositive)


-------------------------------------
// UTILIZANDO ARGUMENTOS EM FUNÇÕES

function price() {
    let total = 0
    for (let value of arguments)
    total += value
    return total
}

console.log(price(10, 20, 40, 50))

-------------------------------
// CONFIGURANDO PARAMETROS DEFAULT


function carFinanciado(preco, juros, years) {
    return( preco * juros / 100 * years) + juros
}

console.log(carFinanciado( 40000, 17, 5))
*/