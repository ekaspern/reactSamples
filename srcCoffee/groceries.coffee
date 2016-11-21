React = require 'react'
Grocery = require('./grocery').f
{Flux} = require 'delorean'

{div} = React.DOM

Groceries = React.createClass

  mixins: [Flux.mixins.storeListener]

  watchStores: ['grocery']

  displayName: 'Groceries'


  # getInitialState: ->
  #   # this should come from a db and then use Flux to grab the data
  #   {
  #     groceryStores: [
  #       {
  #         id: 1
  #         name: 'Whole Foods'
  #         products: ['Peanut Butter', 'Eggs', 'Yogurt']
  #       },
  #       {
  #         id: 2
  #         name: 'Harvest Coop'
  #         products: ['Hummus', 'Ice cream', 'Bread']
  #       },
  #       {
  #         id: 3
  #         name: 'Trader Joes'
  #         products: ['Potato Chips', 'Trail Mix', 'Seltzer']
  #       }
  #     ] 
  #   }

  render: ->
    {groceryStores} = @getStore 'grocery'

    console.log "groceryStores", groceryStores

    stores = []

    for store in groceryStores
      {id} = store
      
      stores.push Grocery {
        key: id
        store: store
      }

    div {
      key: "list"
    }, stores


module.exports =
  c: Groceries
  f: React.createFactory Groceries
