React = require 'react'
Grocery = require('./grocery').f
GroceryItem = require('./groceryItem').f
{Flux} = require 'delorean'

{div, h2} = React.DOM

Groceries = React.createClass

  mixins: [Flux.mixins.storeListener]

  watchStores: ['grocery']

  displayName: 'Groceries'


  render: ->
    {groceryStores, currentList} = @getStore 'grocery'

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
          key: item
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
          key: 'title'
        }, "Current List"
        displayItems 
      ] if currentList.length  
    ]


  handleStoreClick: (id) ->
    @trigger 'getCurrentList', id




module.exports =
  c: Groceries
  f: React.createFactory Groceries
