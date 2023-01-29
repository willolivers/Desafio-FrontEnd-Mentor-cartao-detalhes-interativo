const form = document.querySelector('#form');

const btnConfirm = document.querySelector('#btn-confirm');

const cardTxtNumbers = document.querySelector('#card-txt-numbers')
const cardTxtName = document.querySelector('#card-name')
const cardTxtDate = document.querySelector('#card-date')
const cardTxtCvc = document.querySelector('#information-cvc')

const cardName = document.querySelector('#name')
const cardNumber = document.querySelector('#number')
const cardMounth = document.querySelector('#mounth')
const cardYear = document.querySelector('#year')
const cardCvc = document.querySelector('#cvc')

const erro = document.querySelector('.erro')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const dados = {
        name: cardName.value,
        number: cardNumber.value,
        mounth: cardMounth.value,
        year: cardYear.value,
        cvc: cardCvc.value
    }

    validarInput()
    console.log(dados)
})

cardNumber.addEventListener('input', (event) => {
    let numero = event.target.value + '0'.repeat(16 - event.target.value.length)
    cardTxtNumbers.innerHTML = numero.slice(0,4)+" "+numero.slice(4,8)+" "+numero.slice(8,12)+" "+numero.slice(12)

    if (cardNumber.value != Number(cardNumber.value)) {
        erro.innerHTML = 'Digite apenas números!'
    } else{
        erro.innerHTML = ''
    }
})

cardName.addEventListener('input', (event) => {
    cardTxtName.innerHTML = event.target.value ? event.target.value : 'e.g. Jane Appleseed'
})

cardCvc.addEventListener('input', (event) => {
    cardTxtCvc.innerHTML = event.target.value + '0'.repeat(3 - event.target.value.length) ? event.target.value + '0'.repeat(3 - event.target.value.length) : '000'
})


function validarInput() {
    if (!cardName.value || !cardNumber.value || !cardMounth || !cardCvc.value || !cardYear.value) {
        console.log('Preencha os dados!')
    }
}





