const form = document.querySelector('#form');

const btnConfirm = document.querySelector('#btn-confirm');

const cardTxtNumbers = document.querySelector('#card-txt-numbers')
const cardTxtName = document.querySelector('#card-name')
const cardTxtDate = document.querySelector('#card-date')

const cardName = document.querySelector('#name')
const cardNumber = document.querySelector('#number')
const cardMounth = document.querySelector('#mounth')
const cardYear = document.querySelector('#year')
const cardCvc = document.querySelector('#cvc')


/*form.addEventListener('submit', (event) => {
    event.preventDefault()
    const dados = {
        name: cardName,
        number: cardNumber,
        mounth: cardMounth,
        year: cardYear,
        cvc: cardCvc
    }

    validarInput()
})*/

cardNumber.addEventListener('input', (event) => {
    let numero = event.target.value + '0'.repeat(16 - event.target.value.length)
    cardTxtNumbers.innerHTML = numero.slice(0,4)+" "+numero.slice(4,8)+" "+numero.slice(8,12)+" "+numero.slice(12)

    if (cardNumber.value != Number(cardNumber.value)) {
        const erro = document.createElement('span')
    }
})

cardName.addEventListener('input', () => {

})


function validarInput() {
    if (!cardName.value || !cardNumber.value || !cardMounth || !cardCvc.value || !cardYear.value) {
        console.log('Preencha os dados!')
    }
}





