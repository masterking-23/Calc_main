const numbers = [...document.querySelectorAll('.num')]
const display = document.querySelector('input')

class Calculator {

    setDisplay(value) {
        display.value = display.value + value
    }
    numbers (event) {
        console.log(event.target.textContent)
        let num = event.target.textContent
        this.setDisplay(num)
    }

    sign(){

    }

    clear(){

    }

    remove(){

    }

    equals(){

    }
}

const calc = new Calculator();
console.log(calc);

for (const number of numbers) {
    number.addEventListener('click', (event) => {
        calc.numbers(event)
    })
}