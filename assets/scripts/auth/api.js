'use strict'

const config = require('../config.js')
const store = require('../store.js')
const events = require('./events.js')
// const gamelogic = require('/.gamelogic.js')

const game = function (game = {cells: ['', '', '', '', '', '', '', ' ', ''], over: false}) {
  if (game) {
    game.id = game.id
    game.cells = game.cells
    game.over = game.over
  }
  game.currentPlayer = 'X'
}

let currentPlayer = 'X'

const gameboard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

const apiIndex = function () {
  // console.log('api index')
  return $.ajax({
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiUrl + 'games'
  })
}

const signUp = function (data, event) {
  // console.log('api URL is', config.apiUrl)
  // console.log('data', data)
  // console.log('event', event)
  // console.log('store', store)
  // console.log('config', config)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  // console.log('api URL is', config.apiUrl)
  // console.log('data', data)
  // console.log('event', event)
  // console.log('store', store)
  // console.log('config', config)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const passwordChange = function (data) {
  // console.log('store in change password', store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  // console.log('store in change password', store)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
    // data: data
  })
}

const listGames = function (id) {
  // console.log('games list create')
  // console.log(id)
  return $.ajax({
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiUrl + 'games/' + id
  })
}

// const newGame = function () {
//   event.preventDefault()
//   // console.log('data', data)
//   console.log('event', event)
//   // console.log('data', data)
//   console.log('store', store)
//   // console.log('config', config)
//   // console.log('data.id', data.id)
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     data: {},
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     }
//   })
// }

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

const showGame = function (id) {
  // console.log('games id', game.id)
  console.log('store.game.id', store.game.id)
  // console.log('show game id')
  // console.log('showgameId', id)
  return $.ajax({
    url: config.apiUrl + '/games' + id,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
    // data: data
  })
}

const updateMove = function (data, event) {
  // console.log('data', data)
  // console.log('event', event)
  console.log('store', store)
  // console.log('config', config)
  // console.log('gameboard', gameboard)
  // store.game = data.game
  // console.log('user', currentUser)
  // data = store.gameboard
  console.log('store.gameboard', store.gameboard)
  // console.log('game', game)
  // console.log('id', id)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.data,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const joinGame = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  passwordChange,
  signOut,
  // createGame,
  listGames,
  showGame,
  joinGame,
  // updateGame,
  // markCell,
  updateMove,
  newGame,
  apiIndex
}
// const boxClick = function () {
//
// }
// const passwordChange = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data
//   })
// }
// const listGames = function (id) {
//   console.log(id)
//   return $.ajax({
//     url: config.apiUrl + '/games/' + id
//     method: 'GET',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     // data: data
//   })
// }

// const createGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data
//   })
// }

// const updateGame = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }
// const updateMove = function () {
//   console.log('store.user check', store.user)
//   console.log('store.game check', store.game)
//   // console.log('store.game.event check', store.game.event)
//   // console.log('store.game.id check' game.id)
//   const gameData = {}
//   gameData.game = store.game
//   console.log('gameData.game check', gameData.game)
//   return $.ajax({
//     method: 'PATCH',
//     url: config.apiUrl + '/games/' + store.game.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: gameData
//   })
// }

//
// const updateGame = function (data, id) {
//   console.log(data)
//   return $.ajax({
//     url: config.apiUrl + '/games/' + id,
//     method: 'PATCH',
//     headers: {
//       // contentType: 'application/json',
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: index,
//           value: value
//         },
//         over: false
//       }
//     }
//   })
// }

// const updateGame = function (store, data, index, value, over, events, id) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + data.id,
//     method: 'PATCH',
//     headers: {
//       contentType: 'application/json',
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: index,
//           value: value
//         },
//         over: over
//       }
//     }
//   })
// }
// const markCell = function (id, data) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
