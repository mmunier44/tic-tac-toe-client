'use strict'

const store = require('../store.js')
const api = require('./api.js')

// $('#marker0').on('click', gamelogic.Click)
// $('#marker1').on('click', gamelogic.Click)
// $('#marker2').on('click', gamelogic.Click)
// $('#marker3').on('click', ggamelogi.Click)
// $('#marker4').on('click', gamelogic.Click)
// $('#marker5').on('click', gamelogic.Click)
// $('#marker6').on('click', gamelogic.Click)
// $('#marker7').on('click', gamelogic.Click)
// $('#marker8').on('click', gamelogic.Click)

// const currentUser = player1




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
//   const winConditions = [
//       [0, 1, 2],
//       [3, 4, 5],
//     [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ]


module.exports = {
  checkWinConditions,
  endGame,
  nextTurn,
  move,
  restartGame,
  ticTacToe,
  // boardArray,
  // boardArray2,
  winConditions,
  checkWinConditionsLong,
  checkTie,
  count,
  gameboard,
  store,
  marker0,
  marker1,
  marker2,
  marker3,
  marker4,
  marker5,
  marker6,
  marker7,
  marker8,
  onMarker0,
  onMarker1,
  onMarker2,
  onMarker3,
  onMarker4,
  onMarker5,
  onMarker6,
  onMarker7,
  onMarker8,
  gamelogicClick,
  markerTest,
  onClick
}


// const authEvents = require('./auth/events.js')
//
// $('#gameboard').click(function(event) {
//   let boxId = $(this.attr('id'))
//   console.log('check store', store)
//   store.game.id = boxId
//   ticTacToe.move(event.target.id)
// })

// const onMarker0 = function(event) {
//   event.preventDefault()
//   if ($('#marker0').text() === '' && !winConditions) {
//     $('#marker0').text(currentUser)
//     gameboard[0] = currentUser
//     api.updateGame(0, currentUser)
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker1 = function(event) {
//   event.preventDefault()
//   if ($('#marker1').text() === '' && !winConditions) {
//     $('#marker1').text(currentUser)
//     gameboard[1] = currentUser
//     api.updateGame(1, currentUser)
//     // api.updateGame()
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker2 = function(event) {
//   event.preventDefault()
//   if ($('#marker2').text() === '' && !winConditions) {
//     $('#marker2').text(currentUser)
//     gameboard[2] = currentUser
//     api.updateGame(2, currentUser)
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker3 = function(event) {
//   event.preventDefault()
//   if ($('#marker3').text() === '' && !winConditions) {
//     $('#marker3').text(currentUser)
//     gameboard[3] = currentUser
//     api.updateGame(3, currentUser)
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker4 = function(event) {
//   event.preventDefault()
//   if ($('#marker4').text() === '' && !winConditions) {
//     $('#marker4').text(currentUser)
//     gameboard[4] = currentUser
//     api.updateGame(4, currentUser)
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker5 = function(event) {
//   event.preventDefault()
//   if ($('#marker5').text() === '' && !winConditions) {
//     $('#marker5').text(currentUser)
//     gameboard[5] = currentUser
//     api.updateGame(5, currentUser)
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker6 = function(event) {
//   event.preventDefault()
//   if ($('#marker6').text() === '' && !winConditions) {
//     $('#marker6').text(currentUser)
//     gameboard[6] = currentUser
//     api.updateGame(6, currentUser)
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker7 = function(event) {
//   event.preventDefault()
//   if ($('#marker7').text() === '' && !winConditions) {
//     $('#marker7').text(currentUser)
//     gameboard[7] = currentUser
//     api.updateGame(7, currentUser)
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }
//
// const onMarker8 = function(event) {
//   event.preventDefault()
//   if ($('#marker8').text() === '' && !winConditions) {
//     $('#marker8').text(currentUser)
//     gameboard[8] = currentUser
//     api.updateGame(8, currentUser)
//     checkWinConditions()
//     nextTurn()
//   } else {
//     $('#message').text('Try another Square')
//   }
// }

// $('#gameboard').on('click','#marker0', function(event) {
//   const $'#marker0' = $(event.currentTarget)
//   $marker0.addClass('square-X')
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

// const nextTurn = function () {
//   this.turn = (this.turn === 0) ? 'X' : 'O'
//   this.winConditions = this.checkWinConditions()
//   if (this.winConditions) {
//     this.endGame()
//   }
// }
//
// const endGame = function () {
//   if (this.winConditions === 'player1') {
//     $('#scoreboard').html('player1 wins!')
//   } else {
//     $('#scoreboard').html(this.winConditions + 'player2 wins!')
//   }
//   // $('#scoreboard').append('<form id='play-again;>Play Again</form>
//   //
//   // $('#scoreboard').newgame
//
//   $('#new-game').click(function () {
//     ticTacToe.restartGame()
//   })
//   $('#scoreboard').show()
//   this.winConditions = false
// }
//
// // NOTE: Talking Point Add check for blanks
// const checkWinConditions = function () {
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
//
//   let count = 0
//   for (space in this.gameboard) {
//     if (this.gameboard[space]) {
//       count += 1
//     }
//     if (count === 9) {
//       return 'player1'
//     }
//   }
// }
//
// const tieGame = function () {
//   if(checkWinConditionsLong === false) {
//     return endGame()
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

// // NOTE:  Add check for blanks
// const checkWinConditionsLong = function () {
//   if (gameboard.cells[0] === gameboard.cells[1] && gameboard.cells[1] === gameboard.cells[2]) {
//     return endGame()
//   } else if (gameboard.cells[3] === gameboard.cells[4] && gameboard.cells[4] === gameboard.cells[5]) {
//     return endGame()
//   } else if (gameboard.cells[6] === gameboard.cells[7] && gameboard.cells[7] === gameboard.cells[8]) {
//     return endGame()
//   } else if (gameboard.cells[0] === gameboard.cells[3] && gameboard.cells[3] === gameboard.cells[6]) {
//     return endGame()
//   } else if (gameboard.cells[1] === gameboard.cells[4] && gameboard.cells[4] === gameboard.cells[7]) {
//     return endGame()
//   } else if (gameboard.cells[2] === gameboard.cells[5] && gameboard.cells[5] === gameboard.cells[8]) {
//     return endGame()
//   } else if (gameboard.cells[0] === gameboard.cells[4] && gameboard.cells[4] === gameboard.cells[8]) {
//     return endGame()
//   } else if (gameboard.cells[2] === gameboard.cells[4] && gameboard.cells[4] === gameboard.cells[6]) {
//     return endGame()
//   } else {
//     return tieGame()
//   }
// }


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

// let onClick = function (boxId, currentPlayer) {
//   if (currentPlayer === 0) {
//     $('#'+boxId).html('X')
//   } else {
//     $('#'+boxId).html('O')
//   }
// }




// $('<img/>')
// .attr('src','Tic_Tac_Toc_Color.png')
// .appendTo('#gamediv')
//
// var img = document.createElement('img')
// img.src = "https://imgur.com/a/7wpBH3y"
//
// var src = document.getElementById('header')
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
// const changePlayer = function () {
//     if (!this.player || this.player === 'o') {this.player = 'x';
//   } else {this.player = 'o'}
// }
//
// let clearBoard = function(gamestate) {
//   for (let i = 0; i < 9; i++) {
//     gamestate.cells[i] = ''
//   }
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
