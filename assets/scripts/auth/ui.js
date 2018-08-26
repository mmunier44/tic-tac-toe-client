'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').text('Successful Signup')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input').val('')
  // console.log('signUpSuccess ran')
  // $('#change-password').removeClass('hide')
  // $('#sign-out').removeClass('hide')
  $('#sign-up').addClass('hide')
  // $('#user-message-signup').html('You are signed up!')
  // $('#timeout')
}

const signUpFail = function () {
  $('#message').text('Signup Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-up input').val('')
  // console.log('signUpFail ran')
}

const signInSuccess = function (response) {
  $('#message').text('Successful Sign In')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
  $('#change-password input').val('')
  store.user = response.user
  // console.log(response.user)
  // console.log('response is', response)
  // console.log('store', store)
  // console.log('gameboard', gameboard)
  // console.log('signInSuccess ran')
  // console.log('storegamebord', store.gameboard)
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#new-game').removeClass('hide')
  $('#list-games').removeClass('hide')
  $('#join-games').removeClass('hide')
  $('table').removeClass('hide')
  $('play-count').removeClass('hide')
  $('x-win count').removeClass('hide')
  $('o-win count').removeClass('hide')
  // $('#timeout')
}

const signInFail = function () {
  $('#message').text('Sign In Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
  // console.log('signInFail ran')
  // $('#change-password').removeClass('hide')
}

const passwordChangeSuccess = function (response) {
  $('#message').text('Successful Password Change')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
  // console.log('response is', response)
  // console.log('store', store)
  $('#change-password').addClass('hide')
  // $('#timeout')
}

const passwordChangeFail = function () {
  $('#message').text('Password Change Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
}

const signOutSuccess = function (response) {
  $('#message').text('Successful Sign Out')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in input').val('')
  // console.log('signOutSucess ran')
  $('#change-password').addClass('hide')
  $('#sign-up').removeClass('hide')
  $('#new-game').addClass('hide')
  $('#sign-in').removeClass('hide')
  $('#sign-out').addClass('hide')
  $('table').addClass('hide')
  $('play-count').addClass('hide')
  $('x-win count').addClass('hide')
  $('o-win count').addClass('hide')
  // console.log('response is', response)
  // console.log('store', store)
  // $('#timeout')
}

const signOutFail = function (response) {
  $('#message').text('Sign Out Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
  // console.log('signoutFail ran')
}

const listGamesSuccess = function (response) {
  $('#message').text('List Games Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#list-games input').val('')
  // console.log('listGamesSuccess ran')
}

const listGamesFail = function (response) {
  $('#message').text('List Games Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#list-games input').val('')
  // console.log('listGamesFail ran')
}

const createGameSuccess = (data) => {
  store.game = data.game
  console.log('newstoregame', store.game)
  console.log('newdatagame', data.game)
  $('#message').text('Create Game Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#create-games input').val('')
  // console.log('createGameSuccess ran')
  $('#change-password').addClass('hide')
  // console.log('store', store)

  // store.game = data.game
}

const newGameSuccess = function (data) {
  $('#table').show()
  $('#play-count').html(function (i, val) { return +val + 1 })
  $('x-winner-message').html('')
  $('o-winner-message').html('')
  // $('#change-password').addClass('hide')
  // console.log('new game store', store)
  // console.log('new game data', data)
  // console.log('game', game)
  // console.log('newgame data game', data.game)
  // console.log('store.data', store.data)
  // console.log('store.id', store.id)
  // // console.log('storegame', store.game)
  // console.log('data.id', data.id)
  // console.log('store.data.id', store.data.id)
  // console.log('store.game.id', store.game.id)
  // console.log('data', data)
  // console.log('newgamestore', store)
  // console.log('store.data.game', store.data.game)
  // console.log('storegameid', .id)
  // console.log(gameboard)
}

const newGameFail = function (data) {
}

// const updateMove = function (data) {
// }

const createGameFail = function (response) {
  $('#message').text('Create Game Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#create-game input').val('')
  // console.log('createGameFail ran')
}

const updateGameSuccess = function (data) {
  $('#message').text('Update Game Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  // $('#create-games input').val('')
  // console.log('store', store)
  // console.log('updated game', data)
  // console.log('game', store.game.id)
  // console.log('user', user)
  // console.log('createGameSuccess ran')
  // store.game = data.game
}

const updateGameFail = function (response) {
  $('#message').text('Create Game Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#create-games input').val('')
  // console.log('createGameFail ran')
}

const showGameSuccess = function (response) {
  $('#message').text('Show Game Success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#show-games input').val('')
  // console.log('showGameSuccess ran')
}

const showGameFail = function (response) {
  $('#message').text('Show Games Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#show-games input').val('')
  // console.log('showGameFail ran')
}

const joinGameSuccess = function (response) {
  $('#message').text('Join Game Success')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#join-games input').val('')
  // console.log('joinGameSuccess ran')
}

const joinGameFail = function (response) {
  $('#message').text('Join Game Fail')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#join-games input').val('')
  // console.log('joinGameFail ran')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  passwordChangeSuccess,
  passwordChangeFail,
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
  newGameSuccess,
  newGameFail,
  // updateMove,
  store
}
// window.onscroll = function () {
//   myFunction()
// }
// const header = document.getElementbyId('myHeader')
// const sticky = header.offsetTop
//
// function myFunction () {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky')
//   } else {
//     header.classList.remove('sticky')
//   }
// }

// const signedOutState = functio () {
//   $(#sign-up-form, #sign-in-form).removeClass
// }
//
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
