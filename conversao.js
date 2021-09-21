const celsius = 1
const kelvin = 2
const fahrenheit = 3

let tempOrigem = fahrenheit
let tempDestino = kelvin
let temperatura = 36
let resultado= temperatura
let xMsg = 'Temperatura origem é igual Temperatura destino = %d'

if (tempOrigem==celsius){
    if (tempDestino==kelvin){
        resultado=temperatura + 273
        xMsg ='Celsius => Kelvin = %d'
    } else if (tempDestino==fahrenheit){
        resultado=temperatura*9/5+32
        xMsg ='Celsius => fahrenheit = %d'
    }
}else if (tempOrigem==kelvin){
    if(tempDestino==celsius){
        resultado=temperatura-273
        xMsg ='Kelvin => Celsius = %d'
    }else if (tempDestino==fahrenheit){
        resultado=(temperatura-273)*9/5+32
        xMsg ='Kelvin => Fahrenheit = %d'
    }
}else{
    if (tempDestino==celsius){
        resultado=(temperatura-32)*5/9
        xMsg ='Fahrenheit => Celsius = %d'
    }else if (tempDestino==kelvin){
        resultado=(temperatura-32)*5/9+273
        xMsg ='Fahrenheit => kelvin = %d'
    }
}
console.log(xMsg, resultado)