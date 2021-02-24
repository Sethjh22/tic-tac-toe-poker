const idInput = document.getElementById('idInput')
// console.log(idInput)
const colorInput = document.getElementById('colorInput')
// console.log(colorInput)

function setCard(){

    // idInput.value = document.getElementById() wrong cause I already accessed the the string they text with my first document.getElementById()
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
}