var valor=123
var u= valor%10
var d= Math.trunc(valor%100/10)
var c= Math.trunc(valor/100)
var resultado=u*100+d*10+c
console.log(resultado)