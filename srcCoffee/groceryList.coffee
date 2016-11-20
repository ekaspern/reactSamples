React = require 'react'
GroceryItem = require('./groceryItem').f

{div, ul} = React.DOM

GroceryList = React.createClass

  displayName: 'GroceryList'

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
        className: 'grocery-list'
      }, list


module.exports =
  c: GroceryList
  f: React.createFactory GroceryList
