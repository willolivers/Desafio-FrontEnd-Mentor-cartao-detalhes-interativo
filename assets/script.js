const form = document.querySelector('#form');

const btnConfirm = document.querySelector('#btn-confirm');

const cardTxtNumbers = document.querySelector('#card-txt-numbers')
const cardTxtName = document.querySelector('#card-name')
const cardTxtDate = document.querySelector('#card-date')
const cardTxtCvc = document.querySelector('#information-cvc')

const cardName = document.querySelector('#name')
const cardNumber = document.querySelector('#number')
const cardDate = document.querySelectorAll('.date')
const cardCvc = document.querySelector('#cvc')

/*************ERROS*************/

const erroName = document.querySelector('.erro-Name')
const erroNumber = document.querySelector('.erro-Number')
const erroDate = document.querySelector('.erro-Date')
const erroCvc = document.querySelector('.erro-Cvc')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    let dados = {
        name: cardName.value,
        number: cardNumber.value,
        cvc: cardCvc.value
    }

    validarInput()
    console.log(dados)
})



cardName.addEventListener('input', (event) => {
    cardTxtName.innerHTML = event.target.value ? event.target.value : 'e.g. Jane Appleseed'
})

cardNumber.addEventListener('input', (event) => {
    let numero = event.target.value + '0'.repeat(16 - event.target.value.length)
    cardTxtNumbers.innerHTML = numero.slice(0,4)+" "+numero.slice(4,8)+" "+numero.slice(8,12)+" "+numero.slice(12)

    if (cardNumber.value != Number(cardNumber.value)) {
        erroNumber.innerHTML = 'Wrong format, numbers only'
    } else{
        erroNumber.innerHTML = ''
    }
})


cardCvc.addEventListener('input', (event) => {
    cardTxtCvc.innerHTML = event.target.value + '0'.repeat(3 - event.target.value.length) ? event.target.value + '0'.repeat(3 - event.target.value.length) : '000'

    if (cardCvc.value != Number(cardCvc.value)) {
        erroCvc.innerHTML = 'Wrong format, numbers only'
    } else{
        erroCvc.innerHTML = ''
    }

    if (!cardCvc.value) {
        erroCvc.innerHTML = "Can't be blank"
    }
})


function validarInput() {
    if (!cardName.value || !cardNumber.value || !cardDate.value || !cardCvc.value) {
    }
}





