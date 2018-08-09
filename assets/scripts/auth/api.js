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
//     method: 'PATCH',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

const signOut = function (data) {
  // console.log('store in change password', store)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  // passwordChange,
  signOut
}
