React = require 'react'

{li} = React.DOM

GroceryItem = React.createClass

  displayName: 'GroceryItem'

  render: ->
    {product} = @props

    li {
      className: 'grocery-item'
    }, product


module.exports =
c: GroceryItem
f: React.createFactory GroceryItem
