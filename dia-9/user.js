
let nome = prompt("Coloque seu nome:")
let idade = parseInt(prompt("Coloque sua idade:"))
let peso = Number(prompt("Coloque seu peso:"))
let altura = parseFloat(prompt("Coloque sua altura:"))
let profissão = prompt("Qual sua profissão?")
let imc = peso / (altura * altura)

document.body.innerHTML +=`<p>Olá! ${nome}, sua idade é: ${idade} anos, seu peso é: ${peso}Kg, sua altura: 
${altura} cm e sua Profissão é: ${profissão} </p>`

if(imc < 18.5 ){
    document.body.innerHTML += `Seu IMC foi indicado como: Magreza ${imc.toFixed(2)}bg/m2`
}else if(imc >= 18.5 && imc <= 24.9){
    document.body.innerHTML +=`Seu IMC foi indicado como: Normal ${imc.toFixed(2)} bg/m2`
}else if(imc >= 24.9 && imc <= 30){
    document.body.innerHTML +=`Seu IMC foi indicado como: Sobrepeso ${imc.toFixed(2)} bg/m2`
}else{
    document.body.innerHTML += `Seu IMC foi indicado como: Obesidade ${imc.toFixed(2)} bg/m2`
}


//Verifiquei a idade do user no Ano que nasceu, até o ano atual, com sua idade em cada um deles.

let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Seu ano de Nascimento foi: "+anoNasc)


let anoVivo = anoNasc
let atualIdade = 0

console.log("---------------------------")

for(let anoVivo = anoNasc; anoVivo <= anoAtual; anoVivo++){
    console.log(anoVivo+ " - "+atualIdade+" anos de idade")
    atualIdade++;
}

console.log("---------------------------")


//Errei muito nesse. vou resolver por último
/*
if (!isNaN(idade)) {
    const mesesPorAno = 12;
    const diasPorSemana = 7;
    const diasPorAno = 365.25;

    const idadeEmMeses = idade * mesesPorAno;
    const idadeEmDias = idade * diasPorAno;
    const idadeEmSemanas = idadeEmDias / diasPorSemana;

    console.log(`Idade em meses: ${idadeEmMeses.toFixed(2)}`);
    console.log(`Idade em dias: ${idadeEmDias.toFixed(2)}`);
    console.log(`Idade em semanas: ${idadeEmSemanas.toFixed(2)}`);
} else {
    console.log("Por favor, insira uma idade válida.");
}*/

if(idade >= 18){
    alert("Pode tomar umas geladas! ein..")
}else{
    alert("Você não pode tomar umas geladas ainda...")
} 
