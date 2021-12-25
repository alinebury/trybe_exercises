let number = 0;

for(let i=0 ; i<=50 ; i++){ //verifica os números
    let prime = true;
    for(let j=2 ; j<i ; j++){ //verifica divisão dos números
        if(i%j === 0){
            prime = false
        }
    }
    if(prime){
        number = i;
    }
}
console.log(number);