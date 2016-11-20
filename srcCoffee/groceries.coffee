React = require 'react'
Grocery = require('./grocery').f

{div} = React.DOM

Groceries = React.createClass

  displayName: 'Groceries'

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
