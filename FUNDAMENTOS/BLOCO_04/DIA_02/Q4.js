let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index++) {
    result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
    console.log("Valor maior que 20:", result);
} else {
    console.log("Valor menor ou igual a 20:", result);
}