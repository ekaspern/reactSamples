import React from 'react'
# import GroceryItem from './groceryItem.js'

{div} = React.DOM

ShoppingList = React.createClass

  displayName: 'ShoppingList'

  getInitialState: ->
    {
      items: ['Peanut Butter', 'Eggs', 'Yogurt']
    }

  render: ->
    div {
      className: 'shopping-list'
    }, 'THIS IS  ATEST'


module.exports =
c: ShoppingList
f: React.createFactory(ShoppingList)
