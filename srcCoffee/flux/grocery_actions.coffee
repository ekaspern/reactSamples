# Request = require '../utilities/server_request'
_ = require 'lodash'
moment = require 'moment'

module.exports = 

  viewTriggers:
    'getGroceryStores': 'getGroceryStores'
    'setGroceryStores': 'setGroceryStores'
    'setGroceryList': 'setGroceryList'
    
  getGroceryStores: (data, cb)-> 
    new Request
      url: "/grocery_stores"
    .done (res) =>
      @dispatch('set-grocery-stores', res)
      .then -> cb?()

  setGroceryStores: (data, cb) ->
    @dispatch('set-grocery-stores', data)

  setGroceryList: (options) ->
    @dispatch('set-grocery-list', options)

  