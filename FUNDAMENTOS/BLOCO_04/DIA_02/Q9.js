let numbers = [];

for (let index = 1; index < 26; index++) {
    numbers.push(index);
}
console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
    numbers[index] = numbers[index] * 2;
}
console.log(numbers);