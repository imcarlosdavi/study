console.log("Bem vindo ao Banco Money Right!")

let nome = prompt("Qual é seu nome?")
let idade = parseInt(prompt("Qual é sua idade?"))
let salario = Number(prompt("Qual é o seu salário?"))

console.log("Olá! Sr."+nome+", você tem "+idade
+" anos e sua renda salarial é: "+salario)


let confirmar = prompt("Confirmar informações? sim/não")

while(confirmar != "sim"){
    nome = prompt("Qual é seu nome?")
    idade = parseInt(prompt("Qual é sua idade?"))
    salario = parseFloat(prompt("Qual é o seu salário?"))

    console.log("Olá! Sr."+nome+", você tem "+idade
    +" anos e sua renda salarial é: "+salario)

    confirmar = prompt("Confirmar informações? sim/não")
}

let aumento = 0.015

for(let ano = 1; ano <= 10; ano++){
    salario += salario * aumento
    aumento *= 2

    console.log((2023 + ano)+ " = R$" + salario.toFixed(0))
}

