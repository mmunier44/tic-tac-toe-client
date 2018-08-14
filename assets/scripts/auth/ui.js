'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
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
  console.log('signOutSucess ran')
  // console.log('response is', response)
  // console.log('store', store)
  // $('#timeout')
}

const signOutFail = function (response) {
  $('#message').text('Sign Out Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
  console.log('signoutFail ran')
}

const listGamesSuccess = function (response) {
  $('#message').text('List Games Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#list-games input').val('')
  console.log('listGamesSuccess ran')
}

const listGamesFail = function (response) {
  $('#message').text('List Games Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#list-games input').val('')
  console.log('listGamesFail ran')
}

const createGameSuccess = function (data) {
  $('#message').text('Create Game Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#create-games input').val('')
  console.log('createGameSuccess ran')
  console.log('store', store)
  store.game = data.game
}

const createGameFail = function (response) {
  $('#message').text('Create Game Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#create-games input').val('')
  console.log('createGameFail ran')
}

const updateGameSuccess = function (data) {
  $('#message').text('Update Game Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#create-games input').val('')
  console.log('createGameSuccess ran')
  store.game = data.game
}

const updateGameFail = function (response) {
  $('#message').text('Create Game Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#create-games input').val('')
  console.log('createGameFail ran')
}

const showGameSuccess = function (response) {
  $('#message').text('Show Game Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#show-games input').val('')
  console.log('showGameSuccess ran')
}

const showGameFail = function (response) {
  $('#message').text('Show Games Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#show-games input').val('')
  console.log('showGameFail ran')
}

const joinGameSuccess = function (response) {
  $('#message').text('Join Game Success')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#join-games input').val('')
  console.log('joinGameSuccess ran')
}

const joinGameFail = function (response) {
  $('#message').text('Join Game Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#join-games input').val('')
  console.log('joinGameFail ran')
}

//
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
  // drawBoard,
  listGamesSuccess,
  listGamesFail,
  createGameSuccess,
  createGameFail,
  showGameSuccess,
  showGameFail,
  joinGameSuccess,
  joinGameFail,
  updateGameSuccess,
  updateGameFail,
  store
}
