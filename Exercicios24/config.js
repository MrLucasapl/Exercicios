const button = document.querySelectorAll('button');

button[0].addEventListener('click', () => {
    document.body.style.backgroundColor = 'green'
});
button[1].addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
});

