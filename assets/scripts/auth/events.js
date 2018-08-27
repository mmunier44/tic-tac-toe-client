'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const gamelogic = require('./gamelogic.js')

const clickHandler = function (event) {
  gamelogic.clickEvent(event)
}

const onSignUp = function (event) {
  event.preventDefault()
  $('#message').text('Sign Up Successful')
  // console.log('submitted the form')
  // console.log('event.target:', event.target)
  const data = getFormFields(event.target)
  // console.log('data from the form:', data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  $('#message').text('Sign In Successful')
  event.preventDefault()
  // console.log('signed in')
  const data = getFormFields(event.target)
  // console.log('sign in data', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onPasswordChange = function (event) {
  $('#message').text('Password Changed')
  event.preventDefault()
  // console.log('password changed')
  const data = getFormFields(event.target)

  api.passwordChange(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeInFail)
}

const onSignOut = function (event) {
  $('#message').text('Sign Out Successful')
  event.preventDefault()
  // console.log('Signed Out')
  const data = getFormFields(event.target)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const onListGames = function (event) {
  $('#message').text('Games List Loaded')
  event.preventDefault()
  // console.log('Games Shown')
  // const data = getFormFields(event.target)

  api.listGames()
    .then(ui.listGamesSuccess)
    .catch(ui.listGamesFail)
}

const onShowGame = function (event) {
  $('#message').text('Game Shown')
  event.preventDefault()
  // console.log('Game Shown')
  // let id
  // id = getFormFields(event.target).id
  // const data = getFormFields(event.target)

  api.showGame(id)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFail)
}

const onUpdateMove = function (event) {
  event.preventDefault()
  console.log('move updated')
  console.log('event logged', event)
  // console.log('id', id)
  // console.log('game', game)
  const data = getFormFields(event.target)
  // console.log('game.id', game.id)
  console.log('store.game.id', store.game.id)
  // console.log('store.gameboard', store.gameboard)
  // const data = store.game.id
  // const data = store.gameUpdate
  console.log(store.game.id)
  // console.log('gameboard check', gameboard)
  console.log('store check', store)
  console.log('data check', data)
  // console.log('gameboard.data', gameboard.data)
  console.log('data.game', data.game)
  // console.log('store.gameboard', store.gameboard)
  // console.log('store.gameboard.data', store.gameboard.data)
  console.log(data)
  // console.log(game.id)
  // note store.gameboard causes looped preporty error cant read gameboard
  // note store.gameboard here and api line 201
  api.updateMove(data)
    .then(ui.updateMoveSuccess)
    .catch(ui.updateMoveFail)
}

const onNewGame = function (data, event) {
  $('table').removeClass('hide')
  // event.preventDefault()
  // console.log('onNewGameClick', event)
  // console.log('move updated')
  // console.log('event logged', event)
  // store.game = data.game
  // console.log('id', id)
  // console.log('game', game)
  // console.log('store.game.id', store.game.id)
  // console.log('store.game.id', store.game.id)
  // console.log('store.gameboard', store.gameboard)
  // console.log('gameboardnewcheck', gameboard)
  // console.log('store check', store)
  // console.log('data check', data)
  // console.log('check store game id', game.id)
  console.log('newgameworking?')
  // console.log('check data', data)
  $('#message').text('New Game!')
  api.newGame(event)
    // .then(function (response) {
    //   store.game = new Game(response.game)
    //   console.log('game in new game', store.game)
    //   console.log(store.game)
    //   console.log(store.game.cells)
    //   console.log(store.game.id)
    //   console.log('create game object')
    // })
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}
// let currentPlayer = 'X'
// let marker = 'text'
// const onClickEvent = function (event) {
//     if (currentPlayer === 'X') {
//       $('#' + marker).html('X')
//   } else {
//       $('#' + marker).html('O')
//     }
//   }

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onPasswordChange)
  $('#sign-out').on('submit', onSignOut)
  $('#list-games').on('submit', onListGames)
  $('#create-game').on('submit', onNewGame)
  $('#show-game').on('submit', onShowGame)
  // $('.cell').on('click,onGameboard')
  $('#new-game').on('click', onNewGame)
  $('.cell').on('click', gamelogic.onClickEvent)
  // $('#myModal').modal({backdrop: 'static'})
  // $('#on-click').on('click, onclick')
  // $('#join-game').on('submit', onJoinGame)
  // $('#table').on('click', gamelogic.onClickEvent)
  $('#marker0').on('click', gamelogic.onClickEvent)
  $('#marker1').on('click', gamelogic.onClickEvent)
  $('#marker2').on('click', gamelogic.onClickEvent)
  $('#marker3').on('click', gamelogic.onClickEvent)
  $('#marker4').on('click', gamelogic.onClickEvent)
  $('#marker5').on('click', gamelogic.onClickEvent)
  $('#marker6').on('click', gamelogic.onClickEvent)
  $('#marker7').on('click', gamelogic.onClickEvent)
  $('#marker8').on('click', gamelogic.onClickEvent)
  // $('#markertest').on('click', gamelogicClick)

  // $('#blah').on('click', alert('blah is clicked'))
}

module.exports = {
  addHandlers,
  onUpdateMove,
  // winCombos,
  // onGameboard,
  // onClick,
  onNewGame

// //NOTE Dragons
//   gameboard[0] = ''
//   gameboard[1] = ''
//   gameboard[2] = ''
//   gameboard[3] = ''
//   gameboard[4] = ''
//   gameboard[5] = ''
//   gameboard[6] = ''
//   gameboard[7] = ''
//   gameboard[8] = ''
//   $('.cell').html('')
//   // console.log(gameboard)
//   // console.log(store)
//   // console.log(gameUpdate)
// }
//
// const onGameboard = function (event, data, id, game) {
//   // console.log('data', data)
//   // console.log('event', event)
//   // console.log('store', store)
//   // console.log('game', game)
//   // console.log('id', id)
//   // console(log)
//   // console.log('config', config)
//   gameboard.splice(event.target.id, 1, currentPlayer)
//   // console.log(gameboard)
//   $(this).text(currentPlayer)
//   checkWin()
//   switchPlayer()
//   onClick()
// }
// console.log('checkeventsline221')
// }
// // NOTE Dragons

  // onClick

  // onClick
}
// store.game = data.game

// game >> store
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
