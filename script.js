const testTextField1 = document.querySelector('#testTextField1');
const testTextField2 = document.querySelector('#testTextField2');

let clickCounter = 0;

document.querySelector('#testTextField1').addEventListener('click',
    function() {
        clickCounter = clickCounter + 1; 
        this.textContent = 'Вы кликнули правильно! ' + clickCounter + ' РАЗ!';
})

document.querySelector('#testTextField2').addEventListener('click',
    function() {
        this.textContent = 'Вы кликнули не правильно!';
})