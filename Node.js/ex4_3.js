const prompt = require("prompt-sync")()

const salario = Number(prompt("Salario: "))
const tempo =Number (prompt("Tempo (anos): "))

const quadr = Math.floor(tempo / 4)
const intempo = (quadr * 0.01)
const aumento = salario*intempo

console.log (`Quadriênios: ${quadr}`)
console.log (`Salário Final R$: ${(salario+aumento).toFixed(2)}`)