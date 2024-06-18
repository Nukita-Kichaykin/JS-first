const testTextField = document.querySelector('#testTextField');

let clickCounter = 0;


document.querySelector('#testTextField').addEventListener('click',
    function() {
        clickCounter = clickCounter + 1;
        this.textContent = 'По мне кликнули ' + clickCounter +' раз!';
})