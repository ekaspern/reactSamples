Request = require '../utilities/server_request'
_ = require 'lodash'
moment = require 'moment'
http = require 'http'

module.exports = 

  viewTriggers:
    'getGroceryStores': 'getGroceryStores'
    'setGroceryStores': 'setGroceryStores'
    'getCurrentList': 'getCurrentList'
    'setGroceryList': 'setGroceryList'
    
  getGroceryStores: (cb) -> 
    console.log "test"
    new Request
      url: "/grocery_stores"
    .done (res) =>
      @dispatch('set-grocery-stores', res)
      .then -> cb?()

  setGroceryStores: (data, cb) ->
    @dispatch('set-grocery-stores', data)

  getCurrentList: (id) ->
    @dispatch('get-current-list', id)

  setGroceryList: (options) ->
    @dispatch('set-grocery-list', options)

  