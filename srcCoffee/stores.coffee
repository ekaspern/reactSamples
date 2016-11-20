React = require 'react'
Store = require('./store').f

{div} = React.DOM

Stores = React.createClass

  displayName: 'Stores'

  getInitialState: ->
    {
      groceryStores: [
        {
          id: 1
          name: 'Whole Foods'
          products: ['Peanut Butter', 'Eggs', 'Yogurt']
        },
        {
          id: 2
          name: 'Harvest Coop'
          products: ['Hummus', 'Ice cream', 'Bread']
        },
        {
          id: 3
          name: 'Trader Joes'
          products: ['Potato Chips', 'Trail Mix', 'Seltzer']
        }
      ] 
    }

  render: ->
    {groceryStores} = @state

    stores = []

    for store in groceryStores
      {id} = store
      console.log "store", store 
      stores.push Store {
        key: id
        store: store
      }
    
    div {
      key: "list"
    }, stores


module.exports =
  c: Stores
  f: React.createFactory Stores
