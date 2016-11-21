{Flux} = require 'delorean'
_ = require 'lodash'
moment = require 'moment'


module.exports = Flux.createStore
  
  actions:
    'set-grocery-stores': 'setGroceryStores'
    'set-grocery-list': 'setGroceryList'
  
  scheme:
    groceryStores:
      default: []
    loading: 
      default: null


  setGroceryStores: (data) ->
  
    @set('groceryStores', data)

  setGroceryList: (options) ->
    {id, data} = options

    @state.groceryStores[id].lists = data

    @set
      groceryStores: @state.groceryStores

