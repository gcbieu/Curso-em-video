const prompt = require ("prompt-sync") ()

const peso = Number(prompt("Peso da ração: "))
const consumo = Number(prompt("Consumo Diário (gr): "))

const inPeso = (peso*1000)
const duracao = Math.floor(inPeso/consumo)
const sobra = (duracao*consumo)

console.log (`Duração: ${duracao} dias`)
console.log (`Sobra: ${inPeso-sobra}gr`)
