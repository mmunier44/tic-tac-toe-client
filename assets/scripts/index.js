'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
// const authAPI = require('./auth/api.js')
// const api = require('./api.js')
// const store = require('./store')
// const gamelogic = require('/.gamelogic.js')

$(() => {
  // your JS code goes here
  // store.events = {}
  authEvents.addHandlers()
  // authAPI.addHandlers()
  // api.addHandlers()
  // $('#gameboard').on('click', '', function () {
  //   alert('Hello World!')
  // })
})
