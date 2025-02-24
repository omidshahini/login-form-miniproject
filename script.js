
let userElem = document.querySelector('.username')
let passElem = document.querySelector('.password')
let modalElem = document.querySelector('.modal')
let usernameElem = document.querySelector('.username-validation')
let passwordElem = document.querySelector('.password-validation')

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

function usernameValid() {
  if (userElem.value.length < 12) {
    usernameElem.style.display = 'block'
  } else {
    usernameElem.style.color = 'green'
    usernameElem.style.display = 'block'
    usernameElem.innerHTML = 'Valid UserName'
  }
}

function passwordValid() {
  if (passElem.value.length < 8) {
    passwordElem.style.display = 'block'
  } else {
    passwordElem.style.color = 'green'
    passwordElem.style.display = 'block'
    passwordElem.innerHTML = 'Valid PassWord'
  }
}