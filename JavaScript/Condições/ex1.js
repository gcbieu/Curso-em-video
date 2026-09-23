/*
const vel = 95

if (vel > 80){
    console.log(`MULTADO!`)
} 
console.log(`Dirija com segurança`)
*/

/*
const idade = 22
if (idade < 18){
    console.log(`Menor de idade`)
} else{
    console.log(`Maior de idade`)
}
*/

/*
const nota = 7

if (nota < 5){
    console.log(`REPROVADO`)
} else if (nota < 7) {
     console.log(`RECUPERAÇÃO`)
} else {
    console.log(`APROVADO`)
}
*/

/*
const idade = 16
const acompanhado = true
if (idade >= 18) {
    console.log(`Entrada permitida`)
} else if (idade >= 16 && acompanhado){
    console.log(`Entrada permitida com responsável`)
} else {
    console.log(`Entrada não permitida`)
}
    */

/*
const hora = 6

if (hora >= 6 && hora < 22){
    console.log(`Academia aberta`)
} else {
    console.log(`Academia fechada`)
}
    */

/*
const temperatura = 26

if (temperatura < 15){
    console.log(`Está frio`)
} else if (temperatura <= 25){
    console.log(`Temperatura agradavel`)
} else {
    console.log(`Está quente`)
}
*/

/*
const dia = 3

switch (dia) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda-feira`)
        break
    case 2:
        console.log(`Terça-feira`)
        break
    case 3:
        console.log(`Quarta-feira`)
        break
    case 4:
        console.log(`Quinta-feira`)
        break
    case 5:
        console.log(`Sexta-feira`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`Dia inválido`)
        break
}
        */

/*
const compra = 10

if (compra < 100){
    console.log(`Sem desconto`)
} else if (compra < 500){
    console.log(`10% de desconto`)
} else{
    console.log(`20% de desconto`)
}*/

/*
const agora = new Date()
const hora = agora.getHours()

if (hora < 6){
    console.log (`Boa madrugada`)
} else if (hora < 12){
    console.log(`Bom dia`)
} else if (hora < 18){
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite`)
}
    */

const idade = 18
const altura = 1.30

if (idade < 12) {
    console.log(`Não pode entrar`)
} else if (idade < 18) {
    if (altura >= 1.60) {
        console.log(`Pode entrar`)
    } else {
        console.log(`Não pode entrar por causa da altura`)
    }

} else {
    console.log(`Pode entrar`)
}