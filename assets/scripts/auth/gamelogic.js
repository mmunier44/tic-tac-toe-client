'use strict'

// $(document).ready(function () {
//   $('0').click(function () {
//     alert('click worked!');
//   });
// }

// $('#0').click(function () {
//   alert('click worked!')
// })

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

const ticTacToe = function () {
  // this.ticTacToe = ticTacToe
  this.gameboard = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

  // this.currentBoard = this.newBoard
  this.player1 = 'X'
  this.player2 = 'O'
  this.checkWinConditions = false
  this.turn = 0

const restartGame = function () {

  $('#gameboard').html(gameboard)
  $('#scoreboard').hide()

  this.newBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

  $('#gameboard').click(function () {
    this.move(marker.id)
  })
}

const move = function(id) {
  let space = $('#' + id)
  let marker = id.replace(' ', '#')
  if (!this.gameboard[marker] && !this.winConditions) {
    marker.html(this.turn)
    this.gameboard[marker] = this.turn
    this.nextTurn()
  }
}

const nextTurn = function () {
  this.turn = (this.turn === '0') ? 'X' : 'O'
  this.win = this.checkWinConditions()
  if (this.win) {
    this.endGame()
  }
}

const endGame = function () {
  if (this.winConditions === 'player1') {
    $('#scoreboard').html('player1 game.')
  }
  else {
    $('#scoreboard').html(this.win + 'player2 wins!')
  }

  // $('#scoreboard').newgame

  $('#new-game').click(function () {ticTacToe.newBoard()})
  $('#scoreboard').show()
  this.winConditions = false
}

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const checkWinConditions = function () {
  for (check in this.winConditions) {
    let winCombo = this.winConditions[check]
      let win = this.gameboard[check[0]] + this.gameboard[check[1]] + this.gameboard[check[2]]
        if (win == 'XXX') {
          return 'player1 won'
        } else if (win == 'OOO') {
          return 'player2 won'
        }
        }
  }

$(document).ready(function() {
  console.log('ready steady!')
  ticTacToe.restartGame()
}



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

// const markersImage = 'images/multpile_Tic_Tac_Toe.gif'

// markerImage: "images/multpile_Tic_Tac_Toe.gif"
//
// markers()
//

// const markers = [
//   markerImage = 'images/multpile_Tic_Tac_Toe.gif',
//
// ]

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
//     markersElement.setAttribute('src', 'images/multpile_Tic_Tac_Toe.gif')
//     markersElement.setAttribute('game-board', i)
//     markersElement.addEventListener('click', flipMarkers)
//     document.getElementById('game-board').appendChild(markersElement)
//   }
// }
// newBoard()

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
module.exports = {
  checkWinConditions,
  endGame,
  nextTurn,
  move,
  restartGame,
  ticTacToe,
  // boardArray,
  // boardArray2,
  winConditions
}
