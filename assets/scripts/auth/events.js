'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const gamelogic = require('/.gamelogic.js')

let currentPlayer = 'X'

const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    $('#player').html('X is Playing')
  } else {
    currentPlayer = 'X'
    $('#player').html('O is Playing')
  }
  return currentPlayer
}

const gameboard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

const onClick = function (event) {
  // if (gameboard[1] === 'X' || 'O') {
  console.log('check store', store)
  console.log('event click check', event)
  console.log(gameboard)
  console.log('move updated')
  console.log('event logged', event)
  // console.log('id', id)
  // console.log('game', game)
  // console.log('game.id', game.id)
  console.log('store.game.id', store.game.id)
  console.log('store.gameboard', store.gameboard)
}
// }

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

// let onClick = function (boxId, currentPlayer) {
//   if (currentPlayer == 0) {
//     $('#' + boxId).html('X')
//   } else {
//     $('#' + boxId).html('O')
//   }
// }

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
  // console.log('data from the form:', data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  $('#message').text('Sign In Successful')
  event.preventDefault()
  console.log('signed in')
  const data = getFormFields(event.target)
  console.log('sign in data', data)

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

const onCreateGame = function (event, data) {
  $('#message').text('New Game Created')
  event.preventDefault()
  console.log('New Game Created')
  console.log(event)
  // console.log(data)
  // console.log(store)
  // console.log('auth, sign in', store.user.token)
  console.log(store.user.token)
  // const data = getFormFields(event.target)

  api.createGame(data)
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

const onUpdateMove = function (event, store, data, game, id) {
  event.preventDefault()
  console.log('move updated')
  console.log('event logged', event)
  console.log('id', id)
  console.log('game', game)
  // console.log('game.id', game.id)
  // console.log('store.game.id', store.game.id)
  // console.log('store.gameboard', store.gameboard)
  // const data = store.game.id
  // const data = store.gameUpdate
  // console.log(store.game.id)
  console.log('gameboard check', gameboard)
  console.log('store check', store)
  console.log('data check', data)
  console.log('gameboard.data', gameboard.data)
  // console.log('store.gameboard', store.gameboard)
  // console.log('store.gameboard.data', store.gameboard.data)
  // console.log(data)
  // console.log(game.id)
  // note store.gameboard causes looped preporty error cant read gameboard
  // note store.gameboard here and api line 201
  api.updateMove(store.data)
    .then(ui.updateMoveSuccess)
    .catch(ui.updateMoveFail)
}

const onNewGame = function (data, game, event, id) {
  // event.preventDefault()
  console.log('move updated')
  console.log('event logged', event)
  console.log('id', id)
  console.log('game', game)
  // console.log('game.id', game.id)
  // console.log('store.game.id', store.game.id)
  console.log('store.gameboard', store.gameboard)
  console.log('gameboardnewcheck', gameboard)
  console.log('store check', store)
  console.log('data check', data)
  // console.log('check store game id', game.id)
  console.log('newgameworking?')
  console.log('check data', data)
  $('#message').text('New Game!')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)

  gameboard[0] = ''
  gameboard[1] = ''
  gameboard[2] = ''
  gameboard[3] = ''
  gameboard[4] = ''
  gameboard[5] = ''
  gameboard[6] = ''
  gameboard[7] = ''
  gameboard[8] = ''
  $('.cell').html('')
  console.log(gameboard)
  console.log(store)
  // console.log(gameUpdate)
}

const onGameboard = function (event, data, id, game) {
  console.log('data', data)
  console.log('event', event)
  console.log('store', store)
  console.log('game', game)
  console.log('id', id)
  // console(log)
  // console.log('config', config)
  gameboard.splice(event.target.id, 1, currentPlayer)
  console.log(gameboard)
  $(this).text(currentPlayer)
  checkWin()
  switchPlayer()
  onClick()
}

const checkWin = function () {
  if (gameboard[0] === 'X' &&
      gameboard[1] === 'X' &&
      gameboard[2] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
      gameboard[3] === 'X' &&
      gameboard[4] === 'X' &&
      gameboard[5] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
      gameboard[6] === 'X' &&
      gameboard[7] === 'X' &&
      gameboard[8] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
      gameboard[0] === 'X' &&
      gameboard[3] === 'X' &&
      gameboard[6] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
      gameboard[1] === 'X' &&
      gameboard[4] === 'X' &&
      gameboard[7] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
      gameboard[2] === 'X' &&
      gameboard[5] === 'X' &&
      gameboard[8] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
      gameboard[0] === 'X' &&
      gameboard[4] === 'X' &&
      gameboard[8] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
  } else if (
      gameboard[6] === 'X' &&
      gameboard[4] === 'X' &&
      gameboard[2] === 'X'
  ) {
    $('#x-win-count').html(function (i, val) { return +val + 1 })
    $('#x-winner-message').html('X is Winner')
    // NOTE: switch to O
  } else if (
      gameboard[0] === 'O' &&
      gameboard[1] === 'O' &&
      gameboard[2] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
      gameboard[3] === 'O' &&
      gameboard[4] === 'O' &&
      gameboard[5] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
      gameboard[6] === 'O' &&
      gameboard[7] === 'O' &&
      gameboard[8] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
      gameboard[0] === 'O' &&
      gameboard[3] === 'O' &&
      gameboard[6] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
      gameboard[1] === 'O' &&
      gameboard[4] === 'O' &&
      gameboard[7] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
      gameboard[2] === 'O' &&
      gameboard[5] === 'O' &&
      gameboard[8] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
      gameboard[0] === 'O' &&
      gameboard[4] === 'O' &&
      gameboard[8] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  } else if (
      gameboard[6] === 'O' &&
      gameboard[4] === 'O' &&
      gameboard[2] === 'O'
  ) {
    $('#o-win-count').html(function (i, val) { return +val + 1 })
    $('#o-winner-message').html('O is Winner')
  }
}

// const onUpdateGame = function (event) {
//   $('#message').text('Game Updated')
//   event.preventDefault()
//   console.log('Game Updated')
//   const data = {
//     game: {
//       cell: {
//         index: store.index,
//         value: store.value
//       },
//       over: store.over
//     }
//   }
//   // console.log(store.data)
//   // console.log('store', store)
//   // console.log('data', data)
//   // console.log('event', event)
//   // console.log('blah', store.game)
//   // console.log('id', id)
//   // console.log('user', user)
//   // console.log('id', id)
//   // console.log('store', store.user.token)
//   // console.log(store.user.data)
//   // console.log(store.user.token)
//   // console.log(store.game.id)
//   // console.log(store.user.token)
//   // console.log(store.game.id)
//   // console.log(store.data)
//   // console.log(data.id)
//   // const data = getFormFields(event.target)
//
//   api.updateGame(data)
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFail)
// }

// const onMarker1 = function(event) {
//   event.preventDefault()
//   // if ($('#marker1').text() === '' && !winConditions) {
//   //   $('#marker1').text(currentUser)
// })

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onPasswordChange)
  $('#sign-out').on('submit', onSignOut)
  $('#list-games').on('submit', onListGames)
  $('#create-game').on('submit', onCreateGame)
  $('#show-game').on('submit', onShowGame)
  $('.cell').on('click,onGameboard')
  $('#new-game').on('click', onNewGame)
  $('.cell').on('click', onUpdateMove)
  $('#myModal').modal({backdrop: 'static'})
  $('#on-click').on('click, onclick')
  // $('#join-game').on('submit', onJoinGame)
  // $('#gameboard').on('click', onUpdateGame)
  // $('#marker0').on('click', onMarkCell)
  // $('#marker1').on('click', onUpdateGame)
  // $('#marker2').on('click', onUpdateGame)
  // $('#marker3').on('click', onUpdateGame)
  // $('#marker4').on('click', onUpdateGame)
  // $('#marker5').on('click', onUpdateGame)
  // $('#marker6').on('click', onUpdateGame)
  // $('#marker7').on('click', onUpdateGame)
  // $('#marker8').on('click', onUpdateGame)
  // $('#markertest').on('click', gamelogicClick)

  // $('#blah').on('click', alert('blah is clicked'))
}

module.exports = {
  addHandlers,
  onUpdateMove,
  winCombos,
  onGameboard,
  onNewGame,
  onClick

  // onClick
}
