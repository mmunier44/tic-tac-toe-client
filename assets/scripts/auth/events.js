'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')
const ui = require('./ui.js')
// const gamelogic = ('/.gamelogic.js')
const store = require('../store.js')

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

const onListGames = function (event) {
  $('#message').text('Games List Loaded')
  event.preventDefault()
  console.log('Games Shown')
  // const data = getFormFields(event.target)

  api.listGames()
    .then(ui.listGamesSuccess)
    .catch(ui.listGamesFail)
}

const onCreateGame = function (event) {
  $('#message').text('New Game Created')
  event.preventDefault()
  console.log('New Game Created')
  // console.log(event)
  // console.log(store.game)
  // const data = getFormFields(event.target)

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
}

const onShowGame = function (event) {
  $('#message').text('Game Shown')
  event.preventDefault()
  console.log('Game Shown')
  // const data = getFormFields(event.target)

  api.showGame()
    .then(ui.showGameSuccess)
    .catch(ui.showGameFail)
}

// const onJoinGame = function (event) {
//   $('#message').text('Game Joined')
//   event.preventDefault()
//   console.log('Game Joined')
//   // const data = getFormFields(event.target)
//
//   api.joinGame()
//     .then(ui.joinGameSuccess)
//     .catch(ui.joinGameFail)
// }

const onUpdateGame = function (event) {
  $('#message').text('Game Updated')
  event.preventDefault()
  console.log('Game Updated')
  // console.log(store.data)
  console.log('store', store)
  console.log(store.game.id)
  // console.log(store.data)
  // const data = getFormFields(event.target)

  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

// $(() => {
//  authEvents.addHandlers()
//  $('#0').on('click', gamelogic.click)
//  $('#1').on('click', gamelogic.click)
//  $('#2').on('click', gamelogic.click)
//  $('#3').on('click', gamelogic.click)
//  $('#4').on('click', gamelogic.click)
//  $('#5').on('click', gamelogic.click)
//  $('#6').on('click', gamelogic.click)
//  $('#7').on('click', gamelogic.click)
//  $('#8').on('click', gamelogic.click)
// })

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onPasswordChange)
  $('#sign-out').on('submit', onSignOut)
  $('#list-games').on('submit', onListGames)
  $('#create-game').on('submit', onCreateGame)
  $('#show-game').on('submit', onShowGame)
  // $('#join-game').on('submit', onJoinGame)
  $('#gameboard').on('click', onUpdateGame)
}

module.exports = {
  addHandlers
}
