React = require 'react'
{Flux} = require 'delorean'
Groceries = require('./groceries').f
require '../css/App.css'

{div, h2} = React.DOM


App = React.createClass

  mixins: [Flux.mixins.storeListener]

  watchStores: ['grocery']

  componentWillMount: ->

    # since I have no api to call I am going to set the store with the data when the app mounts

    groceryStores = [
        {
          id: 1
          name: 'Whole Foods'
          products: ['Peanut Butter', 'Eggs', 'Yogurt']
          color: 'green'
        },
        {
          id: 2
          name: 'Harvest Coop'
          products: ['Hummus', 'Ice cream', 'Bread']
          color: 'blue'
        },
        {
          id: 3
          name: 'Trader Joes'
          products: ['Potato Chips', 'Trail Mix', 'Seltzer']
          color: 'red'
        }
      ]

    # this will make an XMLHttpRequest - will fail since it does not exist
    @trigger 'getGroceryStores' 

    # using hard coded data
    @trigger 'setGroceryStores', groceryStores



  render: ->
    div {
      key: "app"
      className: "App"
    }, [
      div {
        key: 'app-header'
        className: 'App-header'
      }, "Grocery Lists"
      Groceries {
        key: 'stores'
      }
    ]



module.exports =
  c: App
  f: React.createFactory App

