/*EXERCICIO 1*/

/** TRANSFORMAR NOTAS ESCOLARES */
/*Crie um  algoritmo que transforme notas escolares do sistema numérico para sistema de notas em caracteres tipo A B C 

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - E

*/

let score = 95
function getScore(score) {
  let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if  (scoreA) {
  scoreFinal = "A"
} else if (scoreB) {
  scoreFinal = "B"
} else if (scoreC) {
  scoreFinal = "C"
} else if (scoreD) {
  scoreFinal = "D"
} else if (scoreF) {
  scoreFinal = "F"
} else {
  scoreFinal = "Nota inválida"
}
return scoreFinal
}

console.log(getScore(10))
console.log(getScore(-10))
console.log(getScore(36))
console.log(getScore(75))
console.log(getScore(91))
console.log(getScore(56))
console.log(getScore(117))