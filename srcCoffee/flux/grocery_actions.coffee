Request = require '../utilities/server_request'
_ = require 'lodash'
moment = require 'moment'
http = require 'http'

module.exports = 

  viewTriggers:
    'getGroceryStores': 'getGroceryStores'
    'setGroceryStores': 'setGroceryStores'
    'getCurrentList': 'getCurrentList'
    'addGroceryListItem': 'addGroceryListItem'
    
  getGroceryStores: (cb) -> 
    console.log "test"
    new Request
      url: "/grocery_stores"
    .done (res) =>
      @dispatch('set-grocery-stores', res)
      .then -> cb?()

  setGroceryStores: (data) ->
    @dispatch('set-grocery-stores', data)

  getCurrentList: (id) ->
    @dispatch('get-current-list', id)

  addGroceryListItem: (options, cb) ->
    @dispatch('add-grocery-list-list', options)
    .then -> cb?()

  