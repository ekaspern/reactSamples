React = require 'react'
Grocery = require('./grocery').f
GroceryItem = require('./groceryItem').f
{Flux} = require 'delorean'

{div, h2, ul, input} = React.DOM

Groceries = React.createClass

  mixins: [Flux.mixins.storeListener]

  watchStores: ['grocery']

  displayName: 'Groceries'

  getInitialState: ->
    {
      newList: null
    }


  render: ->
    {groceryStores, currentList, currentColor} = @getStore 'grocery'
    {newList} = @state

    stores = []
    displayItems = []

    for store in groceryStores
      {id} = store

      stores.push Grocery {
        key: id
        store: store
        handleStoreClick: @handleStoreClick
      }

    # if a list was set on the store
    if currentList?
      for item in currentList 
        displayItems.push GroceryItem {
          key: "item#{item}"
          product: item
        }


    div {
      key: "list"
    }, [
      div {
        key: "store"
        className: 'grocery-stores'
      }, stores
      div {
        key: "store-list"
        className: 'current-list'
      }, [
        h2 {
          key: 'current-title'
          style: 
            color: currentColor
        }, "Current List"
        ul {
          key: 'current-list'
        }, displayItems 
        input {
          key: 'input-add'
          type: 'text'
          ref: 'listname'
          value: newList or ''
          onChange: @handleChange
        }
        div {
          key: 'button-add'
          className: 'list-add'
          onClick: @handleAddClick
        }, "Add to Current List"
      ] if currentList.length  
    ]


  handleStoreClick: (id) ->
    @trigger 'getCurrentList', id

  handleAddClick: () ->
    {currentStore} = @getStore 'grocery'
    newlistname = @refs.listname.value
    @trigger 'addGroceryListItem', {id: currentStore, listname:  newlistname}, @clearInput

  handleChange: (e) ->
    {value} = e.target

    @setState {
      newList: value
    }

  clearInput: ->
    @setState {
      newList: null
    }

 



module.exports =
  c: Groceries
  f: React.createFactory Groceries
