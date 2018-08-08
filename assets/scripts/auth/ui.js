'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#message').text('Successful Signup')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
  console.log('signUpSuccess ran')
  // $('#timeout')
}

const signUpFail = function () {
  $('#message').text('Signup Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-up input').val('')
  console.log('signUpFail ran')
}

const signInSuccess = function (response) {
  $('#message').text('Successful Sign In')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
  console.log('response is', response)
  store.user = response.user
  console.log('store', store)
  console.log('signInSuccess ran')
  // $('#timeout')
}

const signInFail = function () {
  $('#message').text('Sign In Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
  console.log('signInFail ran')
}

// const passwordChangeSuccess = function (response) {
//   $('#message').text('Successful Password Change')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('#sign-in input').val('')
//   console.log('response is', response)
//   console.log('store', store)
//   // $('#timeout')
// }
//
// const passwordChangeFail = function () {
//   $('#message').text('Password Change Failed')
//   $('#message').removeClass()
//   $('#message').addClass('fail')
//   $('#sign-in input').val('')
// }

const signOutSuccess = function (response) {
  $('#message').text('Successful Sign Out')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
  console.log('response is', response)
  console.log('store', store)
  // $('#timeout')
}

const signOutFail = function () {
  $('#message').text('Sign Out Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
  console.log('signoutFail ran')
}

// const toggleLoginButton = function () {
//   // let myToggle = document.getElementById('sign-in');
//   // let displaySetting = myToggle.style.display;
//   const signInButton = document.getElementById('sign-in')
//   const displaySetting = signInButton.style.display
//   if (displaySetting === 'block') {
//     signInButton.style.display = 'none'
//     signInButton.innerHTML = 'Show signInButton'
//   } else {
//     signInButton.style.display = 'block'
//     signInButton.innerHTML = 'Hide signInButton'
//   }
// }

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  // passwordChangeSuccess,
  // passwordChangeFail,
  signOutSuccess,
  signOutFail,
  // toggleLoginButton,
  store
}
