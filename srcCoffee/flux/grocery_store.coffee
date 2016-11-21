{Flux} = require 'delorean'
_ = require 'lodash'
moment = require 'moment'


module.exports = Flux.createStore
  
  actions:
    'set-grocery-stores': 'setGroceryStores'
    'get-current-list': 'getCurrentList'
    'set-grocery-list': 'setGroceryList'
    'add-grocery-list-list': 'addGroceryListItem'
    
  
  scheme:
    groceryStores:
      default: []
    currentList:
      default: []
    currentColor:
      default: null
    currentStore:
      default: null
    loading: 
      default: null


  setGroceryStores: (data) ->
  
    @set('groceryStores', data)

  getCurrentList: (id) ->
    {groceryStores} = @state

    store = _.find(groceryStores, {id: id})

    list = store.products
    color = store.color

    @set
      currentList: list
      currentColor: color
      currentStore: id
    
  setGroceryList: (options) ->
    {index, data} = options

    @state.groceryStores[index].products = data

    @set
      groceryStores: @state.groceryStores

  addGroceryListItem: (options) ->
    {id, listname} = options
    {groceryStores} = @state

    store = _.find(groceryStores, {id: id})

    store.products.push listname

    @set
      groceryStores: groceryStores



