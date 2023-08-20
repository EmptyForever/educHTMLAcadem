let elementsKey = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');


for (let elKey of elementsKey) {
    elKey.onclick = function () {
        display.textContent += elKey.textContent;
    }
}

clear.onclick = function () {
    display.textContent = '';
}
