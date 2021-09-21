for(let i=1;i<=50;i++){
    let contadorDivisores=1
    for (let j=i;j>1;j--){
        if (i%j==0){
            contadorDivisores++
        }
    }



    if (contadorDivisores==2){
    console.log(i)
    }
}