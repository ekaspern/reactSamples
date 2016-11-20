React = require 'react'
GroceryItem = require('./groceryItem').f

{div, ul} = React.DOM

ShoppingList = React.createClass

  displayName: 'ShoppingList'

  getInitialState: ->
    {
      items: ['Peanut Butter', 'Eggs', 'Yogurt']
    }

  render: ->
    {items} = @state

    list = []

    for item in items
      list.push GroceryItem {
        key: item
        product: item
      }

    div {
      key: "list"
    }, ul {
        className: 'shopping-list'
      }, list


module.exports =
  c: ShoppingList
  f: React.createFactory ShoppingList
