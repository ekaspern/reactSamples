React = require 'react'
GroceryList = require('./groceryList').f

{div, h2} = React.DOM

Store = React.createClass

  displayName: 'Store'

  getInitialState: ->
    {
      showList: no
    }

  render: ->
    {store} = @props
    {id, name, products} = store
    {showList} = @state

    console.log "showList", showList

    div {}, [
      h2 {
        key: id
        className: 'store'
        onClick: @handleClick
      }, name
      GroceryList {
        key: 'products'
        className: 'products-list'
        products: products
      } if showList
    ]
    

  handleClick: ->
    @setState 
      showList: yes
    


module.exports =
c: Store
f: React.createFactory Store
