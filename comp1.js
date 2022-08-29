let Bienvenida = prompt("Hey! hola! dime ¿como te llamas?")
alert(`Bienvenido ${Bienvenida} hoy aprenderas a multiplicar`)
let numMultiplicar = parseInt(prompt("Ingresa el numero que deseas saber su tabla"))
let numHasta = parseInt(prompt("Ingresa hasta que numero deseas que se multiplique"))
for(let index = 0; index <=numHasta; index++){
    let multiplicacion = numMultiplicar*index
    console.log(`${numMultiplicar} x ${index} = ${multiplicacion}`)   
}


let condicion = true
let contador = 0
do{
    alert("¿Listo para Googlear? tendras hasta 3 oportunidades")
let adivinanza = prompt("Todos las conocemos como Tabla de multiplicar pero tambien es denominada como Tabla Pitagorica en honor a quien?")
if(adivinanza.toLowerCase() == "pitagoras"){
alert("Muy Bien ! tu respuesta es correcta")
condicion = false
}else{
contador=contador + 1
console.log("Uff te quedan menos intentos, vamos! tu puedes"+ contador)
}
}while(condicion && contador < 3)
