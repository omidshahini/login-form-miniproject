
let userElem = document.querySelector('.username')
let passElem = document.querySelector('.password')
let modalElem = document.querySelector('.modal')

let userElemValue = userElem.value
let passElemValue = passElem.value

function checkValid () {
  if (userElemValue.length < 12 || passElemValue.length < 8) {
    console.log(userElemValue.length, passElemValue.length);
    modalElem.style.display = 'inline'

    setTimeout(function () {
      modalElem.style.display = 'none'
    }, 2000)
  } else {
    modalElem.style.display = 'inline'
    modalElem.innerHTML = 'Welcome'
  }
}