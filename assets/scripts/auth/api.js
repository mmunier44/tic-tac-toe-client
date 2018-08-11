'use strict'

const config = require('../config.js')
const store = require('../store.js')

// const boxClick = function () {
//
// }

const signUp = function (data) {
  console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

// const passwordChange = function (data) {
//   // console.log('store in change password', store)
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',s
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

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

const listGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
    // data: data
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiurl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
    // data: data
  })
}

const updateGame = function (event, id) {
  return $.ajax({
    url: config.apiRUL + '/games/' + id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.index,
          value: store.player

        }
      }
    }
  })
}

const showGame = function (id) {
  return $.ajax({
    url: config.apiurl + '/games/' + id,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
    // data: data
  })
}

const joinGame = function (id, data) {
  return $.ajax({
    url: config.apiurl + '/games/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

// const markCell = function (id, data) {
//   return $.ajax({
//     url: config.apiurl = '/games' + id,
//     method: 'PATCH',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: data.data
//   })
// }

module.exports = {
  signUp,
  signIn,
  // passwordChange,
  signOut,
  createGame,
  listGames,
  showGame,
  joinGame,
  updateGame
  // markCell
}
