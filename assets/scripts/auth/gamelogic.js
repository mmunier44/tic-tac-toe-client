'use strict'

const store = require('../store.js')
const api = require('./api.js')
const markers = ['X', 'O']
// let endGame = false
// let turn = true
let markerClicked
// let cells = []

let currentPlayer = 'X'

const onClickEvent = function (event) {
  markerClicked = event.target.id
  console.log(markerClicked)
  playerMove()
}

const playerMove = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    $('#player').text('X is Playing!')
    // let markerClicked = document.getElementById(target)
    // let value = markers[0]
    // $(cells).toggleClass('unclickable')
    // markerClicked.innerHTML = markers[0]
    // $('markerClicked').html(markers[0])
    $('#cell').html('X')
  } else {
    currentPlayer = 'X'
    $('#player').text('O is Playing!')
    // let markerClicked = document.getElementById(target)
    // let value = markers[1]
    // markerClicked.innerHTML = markers[1]
    // $('markerClicked').html(markers[1])
    $('#cell').html('O')
  }
  return currentPlayer
}

const resetGame = () => {
  console.log(markerClicked)
  if ($('.row').hasClass('unclickable')) {
    console.log($('.row'))
    $('.row').removeClass('unclickable')
  }
  $('.row').empty()
  // xMoves = []
  // oMoves = []
  turn = true
  endGame = false
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

module.exports = {
  // playerMove,
  onClickEvent
  // placeMarker
  // onClick,
  // changePlayer,
  // placeMarker,
  // clickEvent
  // gameboard
  // marker0
  // // marker1,
  // // onMarker2,
  // // onMarker3,
  // // onMarker4,
  // // onMarker5,
  // // onMarker6,
  // // onMarker7,
  // onMarker8
}

// $('#' + window.location.hash.replace(/^#\/?/, '') );

// const onClickEvent = function (event) {
//   $('#cell').html('X')
//   $('#marker0').html(markers[0])
//   $('#marker1').html(markers[0])
//   $('#marker2').html(markers[0])
//   $('#marker3').html(markers[0])
//   $('#marker4').html(markers[0])
//   $('#marker5').html(markers[0])
//   $('#marker6').html(markers[0])
//   $('#marker7').html(markers[0])
//   $('#marker8').html(markers[0])
// }

// let onClickEvent = function (marker, currentPlayer) {
//   if (currentPlayer === 'X') {
//     $(cell).html('X')
//   } else {
//     $('#' + marker).html('O')
//   }
// }

// const onClickEvent = function (event) {
//   markerClicked = event.target.id
//   console.log(markerClicked)
//   playerMove()
// }
  // $('#marker0').html(markers[0])
  // $('#marker1').html(markers[0])
  // $('#marker2').html(markers[0])
  // $('#marker3').html(markers[0])
  // $('#marker4').html(markers[0])
  // $('#marker5').html(markers[0])
  // $('#marker6').html(markers[0])
  // $('#marker7').html(markers[0])
  // $('#marker8').html(markers[0])
  // // playerMove()
  // placeMarker()
  // turn ? playerMove(markerClicked, markers[0]) : playerMove(markerClicked, markers[1])



//
// const placeMarker = (target, marker) => {
//   if(currentPlayer === 'X') {
//     currentPlayer = 'O'
//     $('#player').text('X is Playing!')
//     let markerClicked = document.getElementById(target)
//     let value = markers[0]
//     $(cells).toggleClass('unclickable')
//     markerClicked.innerHTML = markers[0]
//     $('markerClicked').html(markers[0])
//     $(target).html('X')
//   } else {
//     currentPlayer = 'X'
//     $('#player').text('O is Playing!')
//     let markerClicked = document.getElementById(target)
//     let value = markers[1]
//     markerClicked.innerHTML = markers[1]
//     $('markerClicked').html(markers[1])
//     $(target).html('O')
//   }
//   return currentPlayer
// }

// }

// let clickEvent = function (marker, currentPlayer) {
//   if (currentPlayer === 'X') {
//     $('#' + marker).html('X')
//   } else {
//     $('#' + marker).html('O')
//   }
// }

// const changePlayer = function () {
//   if (store.currentPlayer === 'X') {
//     $(store.onClick.target).text('X')
//     store.currentPlayer = 'O'
//     $('#message').text(store.currentPlayer + "'s turn")
//   } else {
//     $(store.onClick.target).text('O')
//     store.currentPlayer = 'X'
//     $('#message').text(store.currentPalyer + "'s turn")
//   }

// $("#table").click(function() {
//   if ($(this).text()=="")
// }

// let onClick = function (boxId, currentPlayer) {
//   if (currentPlayer == 0) {
//     $('#' + boxId).html('X')
//   } else {
//     $('#' + boxId).html('O')
//   }
// }
// $('#message').text('Sign Out Successful')
// let marker = 'X'
// const onClickEvent = function (event) {
//   $('#marker0').html(markers[0])
//   $('#marker1').html(markers[0])
//   $('#marker2').html(markers[0])
//   $('#marker3').html(markers[0])
//   $('#marker4').html(markers[0])
//   $('#marker5').html(markers[0])
//   $('#marker6').html(markers[0])
//   $('#marker7').html(markers[0])
//   $('#marker8').html(markers[0])

  // $('#' + marker).html('O')
// }

// const clickEvent = function (event) {
//   markerClicked = event.target.id
//
//     }

// const placeMarker = (target, marker) => {
//   let markerClicked = document.getElementbyId(target)
//   let value = marker
//   markerClicked.innerHTML = marker
//
// }
//

//
// const changePlayer = function () {
//     if (!this.currentPlayer || this.currentPlayer === 'O') {this.currentPlayer = 'X';
//   } else { this.currentPlayer = 'O'}
// }
//
// const nextTurn = function () {
//   this.turn = (this.turn === 0) ? 'X' : 'O'
//   this.winConditions = this.checkWinConditions()
//   if (this.winConditions) {
//     this.endGame()
//   }
// // }
//
// const tieGame = function () {
//   if(checkWin === false) {
//     return endGame()
//   }
// }
//
// const endGame = function () {

// }

// let clearBoard = function(gameboard) {
//   for (let i = 0; i < 9; i++) {
//     gameboard.cells[i] = ''
//   }

// let gameboard = [
//   '', '', '',
//   '', '', '',
//   '', '', ''
// ]
// //
// const winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

  // let onClick = function (boxId, currentPlayer) {
//   if (gameboard[1] === 'X' || 'O') {
//   // console.log('check store', store)
//   // console.log('event click check', event)
//   // console.log(gameboard)
//   // console.log('move updated')
//   // console.log('event logged', event)
//   // console.log('id', id)
//   // console.log('game', game)
//   // console.log('game.id', game.id)
//   // console.log('store.game.id', store.game.id)
//   // console.log('store.gameboard', store.gameboard)

// }

// const onMarker0 = function (event) {
//   event.preventDefault()
//   if ($('#marker0').text() === '' && !winConditions) {
//     $('#marker0').text(currentPlayer)
//     markers[0] = currentPlayer
//     api.updateGame(0, currentPlayer)
//     checkWin()
//     // nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker1 = function(event) {
//   event.preventDefault()
//   if ($('#marker1').text() === '' && !winConditions) {
//     $('#marker1').text(currentPlayer)
//     gameboard[1] = currentPlayer
//     api.updateGame(1, currentPlayer)
//     // api.updateGame()
//     checkWin()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker2 = function(event) {
//   event.preventDefault()
//   if ($('#marker2').text() === '' && !winConditions) {
//     $('#marker2').text(currentPlayer)
//     gameboard[2] = currentPlayer
//     api.updateGame(2, currentPlayer)
//     checkWin()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker3 = function(event) {
//   event.preventDefault()
//   if ($('#marker3').text() === '' && !winConditions) {
//     $('#marker3').text(currentPlayer)
//     gameboard[3] = currentPlayer
//     api.updateGame(3, currentPlayer)
//     checkWin()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker4 = function(event) {
//   event.preventDefault()
//   if ($('#marker4').text() === '' && !winConditions) {
//     $('#marker4').text(currentPlayer)
//     gameboard[4] = currentPlayer
//     api.updateGame(4, currentPlayer)
//     checkWin()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker5 = function(event) {
//   event.preventDefault()
//   if ($('#marker5').text() === '' && !winConditions) {
//     $('#marker5').text(currentPlayer)
//     gameboard[5] = currentPlayer
//     api.updateGame(5, currentPlayer)
//     checkWin()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker6 = function(event) {
//   event.preventDefault()
//   if ($('#marker6').text() === '' && !winConditions) {
//     $('#marker6').text(currentPlayer)
//     gameboard[6] = currentPlayer
//     api.updateGame(6, currentPlayer)
//     checkWin()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker7 = function(event) {
//   event.preventDefault()
//   if ($('#marker7').text() === '' && !winConditions) {
//     $('#marker7').text(currentPlayer)
//     gameboard[7] = currentPlayer
//     api.updateGame(7, currentPlayer)
//     checkWin()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker8 = function(event) {
//   event.preventDefault()
//   if ($('#marker8').text() === '' && !winConditions) {
//     $('#marker8').text(currentPlayer)
//     gameboard[8] = currentPlayer
//     api.updateGame(8, currentPlayer)
//     checkWin()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }


// const endGame = function () {
//   if (this.winConditions === 'player1') {
//     $('#scoreboard').html('player1 wins!')
//   } else {
//     $('#scoreboard').html(this.winConditions + 'player2 wins!')
//   }
  // $('#scoreboard').append('<form id='play-again;>Play Again</form>
  //
  // $('#scoreboard').newgame

//   $('#new-game').click(function () {
//     ticTacToe.restartGame()
//   })
//   $('#scoreboard').show()
//   this.winConditions = false
// }

// // NOTE: Talking Point Add check for blanks
// const checkWinConditionsShort = function () {
//   for (check in this.winConditions) {
//     const winCombo = this.winConditions[check]
//     const winner = this.gameboard[winCombo[0]] + this.gameboard[winCombo[1]] + this.gameboard[winCombo[2]]
//     if (winner === 'XXX') {
//       return 'player1 won'
//     } else if (winner === 'OOO') {
//       return 'player2 won'
//     }
//     else return tiegame()
//   }
// }

// }

// const winCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [6, 4, 2]
// ]

// NOTE Dragons


// const space = ('#' + id)

// const ticTacToe = function () {
//   // this.ticTacToe = ticTacToe
//   this.gameboard = [
//     '', '', '',
//     '', '', '',
//     '', '', ''
//   ]
//
//   this.player1 = 'X'
//   this.player2 = 'O'
//   this.winConditions = false
//   this.turn = 0
//   this.count = 0
//   // this.currentUser = player1
// }
//
//   const restartGame = function () {
//     // $('#gameboard').html(gameboard)
//     // $('#scoreboard').hide()
//
//     this.newBoard = [
//       '', '', '',
//       '', '', '',
//       '', '', ''
//     ]
//   }
//

// module.exports = {
//   checkWinConditions,
//   nextTurn,
//   move,
//   restartGame,
//   ticTacToe,
//   // boardArray,
//   // boardArray2,
//   winConditions,
//   checkWinConditionsLong,
//   checkTie,
//   count,
//   gameboard,
//   store,
//   marker0,
//   marker1,
//   marker2,
//   marker3,
//   marker4,
//   marker5,
//   marker6,
//   marker7,
//   marker8,
//   onMarker0,
//   onMarker1,
//   onMarker2,
//   onMarker3,
//   onMarker4,
//   onMarker5,
//   onMarker6,
//   onMarker7,
//   onMarker8,
//   gamelogicClick,
//   markerTest,
//   onClick
// }

// const authEvents = require('./auth/events.js')
//
// $('#gameboard').click(function(event) {
//   console.log('check store', store)
//   store.game.id = boxId
//   ticTacToe.move(event.target.id)
// })

// $('#gameboard').on('click','#marker0', function(event) {
// })

// const markerTest = function() {
//   $('marker0').append('X')

// const gamelogicClick = function(event) {
//   event.preventDefault()
//   if ($('#marker0').text() === '' &&!checkWinConditions) {
//
//   }
// }

// const move = function (id) {
//   const space = $('#' + id)
//   const marker = id.replace('marker', '')
//
//   if (!this.gameboard[marker] && !this.winConditions) {
//     space.html(this.turn)
//     this.gameboard[marker] = this.turn
//     this.nextTurn()
//   }
// }

// [0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]

// $(document).ready(function() {
//       console.log('ready steady!')
//       ticTacToe.restartGame()
//
// const gameboard = function [
//   {
//     topLeft: topLeft,
//     topMiddle: topMiddle,
//     topRight: topRight,
//     middleLeft: middleLeft,
//     middleMiddle: middleMiddle,
//     middleRight: middleRight,
//     bottomLeft: bottomLeft,
//     bottomMiddle: bottomMiddle,
//     bottomRight: bottomRight,
//   }
// ]
// const markers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
//
// const markersImage = 'images/multpile_Tic_Tac_Toe.gif'
//
// markerImage: "images/multpile_Tic_Tac_Toe.gif"
//
// markers()
//
//
// const markers = [
//   markerImage = 'images/multpile_Tic_Tac_Toe.gif',
//
// ]
//
//
// const flipMarkers = function () {
// // const markers = markers[markersID]
//   let markersID = this.getAttribute('data-id')
//   this.setAttribute('src', markers.markersImage)
// }
//
// const newBoard = function () {
//   for (let i = 0; i < markers.length; i++) {
//     let markersElement = document.createElement('img')
// markersElement.setAttribute('src', 'images/multpile_Tic_Tac_Toe.gif')
//     markersElement.setAttribute('game-board', i)
//     markersElement.addEventListener('click', flipMarkers)
//     document.getElementById('game-board').appendChild(markersElement)
//   }
// }
// newBoard()
//
// TicTacToe.prototype.boardState = function() {
//   this.currentBoard
// }
//
// TicTacToe.prototype.play = function (space) {
//   this.state = this.currentBoard
//   console.log(this.state)
//
// //   if(marker === 1{
// //     this.
// //   })
// //
// // }

// $('<img/>')
// .attr('src','Tic_Tac_Toc_Color.png')
// src.appendChild(img)
//
// $('#blah').click(function() {
//   alert('Handler for .click() called.');
// });
//
// $(document).ready(function () {
//   $('a').click(function (event) {
//     alert(event.target.id)
//   })
// })
// $(document).ready(function () {
//   $('0').click(function () {
//     alert('click worked!');
//   });
// }
//
// $('#0').click(function () {
//   alert('click worked!')
// })
//
// const boardArray = [
//   '', '', '',
//   '', '', '',
//   '', '', ''
// ]
//
// const boardArray2 = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8]
// ]
// let apiState = {
//   modalOpen: false,
//   signedIn: false,
// }
//
// let gamestate = {
//   player: '',
//   cells: []
//   over: false,
//   turn: 0,
//   game: 0,
//   move: Nan,
//   id: Nan,
//
//   score: {
//     x: 0,
//     o: 0
//     tie: 0,
//
//       resetScore: function () {
//         this.x = 0
//         this.o = 0
//         this.tie = 0
//       }
//   }
// }
//
//
// $('#gameboard').children().html('')
//
// }
//
// letdisplayScore = function(score) {
//   $('#x .score').html(score.x)
//   $'#o .score').html(score.o)
// }
//
// let winCheck = function()
//
// const drawBoard = '<table><tr><td id='marker0'> </td><td id='marker1'> </td><td id='marker2'> </td></tr><tr><td id='marker3'> </td><td id='marker4'> </td><td id='marker5'> </td></tr><tr><td id='marker6'> </td><td id='marker7'> </td><td id='marker8'> </td></tr></table>'
//       $("#board").html(gameboard)
//
