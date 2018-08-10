'use strict'

// $(document).ready(function () {
//   $('0').click(function () {
//     alert('click worked!');
//   });
// }

$('#0').click(function () {
  alert('click worked!')
})

const boardArray = [
  '', '', '',
  '', '', '',
  '', '', ''
]

const boardArray2 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
]

const ticTacToe = function () {
  this.ticTacToe = ticTacToe
  this.newBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]

  this.currentBoard = this.newBoard
  this.player1 = 'X'
  this.player2 = 'O'
  this.gameOver = false
  this.turn = 1
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
  boardArray,
  boardArray2,
  winConditions
}
