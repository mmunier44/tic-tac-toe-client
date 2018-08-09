'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')

// const onBoxClick = function (event) {
//   event.preventDefault()
//   $(document).ready(function(){
//     $("p").on("click", function () {
//       $(this).hide();
//       console.log(clickworked);
//     }
//   })
// }
// const onClick = function (event) {
//   $('p').on('click', function () {
//     $(this).hide()
//     return onClick
//   })
// }
//
// const element = document.createElement('div')
// element.id = 'myDiv'
// element.innerHTML = 'Hello World!'
// document.body.appendChild(element)

const onSignUp = function (event) {
  event.preventDefault()
  $('#message').text('Sign Up Successful')
  console.log('submitted the form')
  console.log('event.target:', event.target)
  const data = getFormFields(event.target)
  console.log('data from the form:', data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  $('#message').text('Sign In Successful')
  event.preventDefault()
  console.log('signed in')
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onPasswordChange = function (event) {
  $('#message').text('Password change Successful')
  event.preventDefault()
  console.log('password changed')
  const data = getFormFields(event.target)

  api.passwordChange(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeInFail)
}

const onSignOut = function (event) {
  $('#message').text('Sign Out Successful')
  event.preventDefault()
  console.log('Signed Out')
  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

// $(() => {
//  authEvents.addHandlers()
//  $('#0').on('click', gameEvents.click)
//  $('#1').on('click', gameEvents.click)
//  $('#2').on('click', gameEvents.click)
//  $('#3').on('click', gameEvents.click)
//  $('#4').on('click', gameEvents.click)
//  $('#5').on('click', gameEvents.click)
//  $('#6').on('click', gameEvents.click)
//  $('#7').on('click', gameEvents.click)
//  $('#8').on('click', gameEvents.click)
// })

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onPasswordChange)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
