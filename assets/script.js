const form = document.querySelector('#form');

const btnConfirm = document.querySelector('#btn-confirm')

const cardTxtNumbers = document.querySelector('#card-txt-numbers')
const cardTxtName = document.querySelector('#card-name')
const cardTxtDate = document.querySelector('#card-date')
const cardTxtCvc = document.querySelector('#information-cvc')

const cardExpMounth = document.querySelector('#mounth')
const cardExpYear = document.querySelector('#year')

const cardName = document.querySelector('#name')
const cardNumber = document.querySelector('#number')
const cardDate = document.querySelectorAll('.date')
const cardCvc = document.querySelector('#cvc')

/*************ERROS*************/

const erroName = document.querySelector('.erro-Name')
const erroNumber = document.querySelector('.erro-Number')
const erroDate = document.querySelector('.erro-Date')
const erroDateYear = document.querySelector('.erro-Date-Year')
const erroCvc = document.querySelector('.erro-Cvc')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    validarInput()
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

const updateDate = () => cardTxtDate.innerHTML = 
    "00".slice(0,2 - cardDate[0].value.length) + cardDate[0].value + "/"
    + "00".slice(0,2 - cardDate[1].value.length) + cardDate[1].value

cardDate.forEach(el => el.addEventListener('input', updateDate))

function validaExpMounth() {
    if (cardExpMounth.value != Number(cardExpMounth.value)) {
        erroDate.innerHTML = 'Wrong format, numbers only'
    } else{
        erroDate.innerHTML = ''
    }

    if (!cardExpMounth.value) {
        erroDate.innerHTML = "Can't be blank"
    }
    
}

function validaExpYear() {
    if (cardExpYear.value != Number(cardExpYear.value)) {
        erroDate.innerHTML = 'Wrong format, numbers only'
    } else {
        erroDate.innerHTML = ''
    }
    
    if (!cardExpYear.value) {
        erroDate.innerHTML = "Can't be blank"
    }
}

cardExpMounth.addEventListener('input', validaExpMounth, )
cardExpYear.addEventListener('input', validaExpYear )



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

btnConfirm.addEventListener('click', () => {
    window.location.href = 'page-finalization.html'
})


