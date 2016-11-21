React = require 'react'
GroceryList = require('./groceryList').f

{div, h2} = React.DOM

Grocery = React.createClass

  displayName: 'Grocery'

  getInitialState: ->
    {
      showList: no
    }

  render: ->
    {store} = @props
    console.log "store", store
    {id, name, products} = store
    {showList} = @state

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
    {handleStoreClick, store} = @props
    {id} = store
    console.log "id", id

    handleStoreClick(id)

    @setState 
      showList: yes
    
    


module.exports =
c: Grocery
f: React.createFactory Grocery
