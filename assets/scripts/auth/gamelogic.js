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
const gameboard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

// const space = ('#' + id)

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
  this.winConditions = false
  this.turn = 0
  this.count = 0

  const restartGame = function () {
    $('#gameboard').html(gameboard)
    $('#scoreboard').hide()

    this.newBoard = [
      '', '', '',
      '', '', '',
      '', '', ''
    ]

    $('#gameboard').click(function (event) {
      ticTacToe.move(event.target.id)
    })
  }
}

const move = function (id) {
  const space = $('#' + id)
  const marker = id.replace('marker', '')

  if (!this.gameboard[marker] && !this.winConditions) {
    space.html(this.turn)
    this.gameboard[marker] = this.turn
    this.nextTurn()
  }
}

const nextTurn = function () {
  this.turn = (this.turn === 0) ? 'X' : 'O'
  this.winConditions = this.checkWinConditions()
  if (this.winConditions) {
    this.endGame()
  }
}

const endGame = function () {
  if (this.winConditions === 'player1') {
    $('#scoreboard').html('player1 wins!')
  } else {
    $('#scoreboard').html(this.winConditions + 'player2 wins!')
  }
  // $('#scoreboard').append('<form id='play-again;>Play Again</form>

  // $('#scoreboard').newgame

  $('#new-game').click(function () {
    ticTacToe.restartGame()
  })
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
    const winCombo = this.winConditions[check]
    const winner = this.gameboard[winCombo[0]] + this.gameboard[winCombo[1]] + this.gameboard[winCombo[2]]
    if (winner === 'XXX') {
      return 'player1 won'
    } else if (winner === 'OOO') {
      return 'player2 won'
    }
  }

  let count = 0
  for (space in this.gameboard) {
    if (this.gameboard[space]) {
      count += 1
    }
    if (count === 9) {
      return 'player1'
    }
  }
}

// $(document).ready(function () {
//   console.log('ready steady!')
//   ticTacToe.restartGame()
// }

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
  winConditions,
  count,
  gameboard
}
