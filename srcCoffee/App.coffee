React = require 'react'
# GroceryList = require('./groceryList').f
Groceries = require('./groceries').f
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
      Groceries {
        key: 'stores'
      }
    ]



module.exports =
  c: App
  f: React.createFactory App

