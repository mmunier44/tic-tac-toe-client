'use strict'

const store = require('../store.js')

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

// $ => (gameboard)

// const markersImage = 'images/multpile_Tic_Tac_Toe.gif'

// markerImage: "images/multpile_Tic_Tac_Toe.gif"
//
// markers()
//

// const markers = [
//   markerImage = 'images/multpile_Tic_Tac_Toe.gif',
//
// ]

// const ticTacToe = function () {
//   this.ticTacToe = ticTacToe
//   this.newBoard = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
//   this.currentBoard = this.newBoard
//   this.player1 = 'X'
//   this.player2 = 'O'
//   this.gameOver = false
//   this.turn = 1
// }
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

const signOutFail = function () {
  $('#message').text('Sign Out Failed')
  $('#message').removeClass()
  $('#message').addClass('fail')
  $('#sign-in input').val('')
  console.log('signoutFail ran')
}

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
  store
}
