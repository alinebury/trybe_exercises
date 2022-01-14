function testingScope(escopo) {
    if (escopo === true) {
    //   var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
    //   var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    // o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

testingScope(true);

const arrowTestingScope = (escopo) => {
    if(escopo === true){
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(`${ifScope}, ótimo, fui utilizada no escopo !`);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}
arrowTestingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const returnArrayOrd = (num) =>{
    for (let i=1 ; i<num.length; i++) {
        for (let j=0 ; j<i ; j++) {  
            if (num[i] < num[j]) {
                let position = num[i];
                num[i] = num[j];
                num[j] = position;
            }
        }  
    }
    return num;
}
const sortedArray = returnArrayOrd(oddsAndEvens);
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);
