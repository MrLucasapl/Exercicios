var numbers = [5, 7, 1, 8, 9];

numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);
document.getElementById('resultado').innerHTML = numbers