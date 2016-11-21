{Flux} = require 'delorean'
_ = require 'lodash'
moment = require 'moment'


module.exports = Flux.createStore
  
  actions:
    'set-grocery-stores': 'setGroceryStores'
    'get-current-list': 'getCurrentList'
    'set-grocery-list': 'setGroceryList'
    
  
  scheme:
    groceryStores:
      default: []
    currentList:
      default: []
    loading: 
      default: null


  setGroceryStores: (data) ->
  
    @set('groceryStores', data)

  getCurrentList: (id) ->
    {groceryStores} = @state

    store = _.find(groceryStores, {id: id})

    list = store.products

    @set
      currentList: list
    
  setGroceryList: (options) ->
    {index, data} = options

    @state.groceryStores[index].products = data

    @set
      groceryStores: @state.groceryStores

