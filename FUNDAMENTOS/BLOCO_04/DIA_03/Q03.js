let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = array[0];
let smaller = array[0];

for(let i=0 ; i<array.length ; i++){
    if(array[i].length > bigger.length){
        bigger = array[i];
    }
}
console.log(bigger);

for(let i=0 ; i<array.length ; i++){
    if(array[i].length < smaller.length){
        smaller = array[i];
    }
}
console.log(smaller);
