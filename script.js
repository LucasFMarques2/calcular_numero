let numberOne = Number(prompt("Informe um número"))
let numberTwo = Number(prompt("Informe outro número"))

alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é: ${(numberOne / numberTwo).toFixed(2)}`)
alert(`o resto da divisão dos dois números é: ${numberOne % numberTwo}`)

let result = numberOne + numberTwo

if( result % 2 == 0){
  alert("Esse número é par")
}else{
  alert("Esse número é impar")
}

if(numberOne == numberTwo){
  alert("Os dois números são iguais")
}else{
  alert("Os dois números são diferentes")
}