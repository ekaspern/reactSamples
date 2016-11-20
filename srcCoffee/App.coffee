React = require 'react'
ShoppingList = require('./shoppingList').f
require '../css/App.css'

{div, h2} = React.DOM


App = React.createClass

  render: ->
    div {
      key: "app"
      className: "App"
    }, [
      div {
        key: 'app-header'
        className: 'App-header'
      }, "Grocery Lists"
      h2 {
        key: "title"
      }, "WHOLE FOODS"
      ShoppingList {
        key: "shopping-list"
      }
    ]



module.exports =
  c: App
  f: React.createFactory App

