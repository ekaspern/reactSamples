React = require 'react'
GroceryList = require('./groceryList').f
Stores = require('./stores').f
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
      Stores {
        key: 'stores'
      }
      # h2 {
      #   key: "grocery-title"
      # }, "WHOLE FOODS"
      # GroceryList {
      #   key: "grocery-list"
      # }
    ]



module.exports =
  c: App
  f: React.createFactory App

