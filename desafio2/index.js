let valorProduto = Number(prompt('Insira o valor do produto'))
console.log(valorProduto)

if (valorProduto >= 20){
    document.getElementById('result').innerHTML = 'Aprovado!'
}
else{ 
    document.getElementById('result').innerHTML = 'Negado!'
};