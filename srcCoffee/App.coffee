React = require 'react'
@import '../css/App.css'

{div} = React.DOM


App = React.createClass

  render: ->
    div {
      className: 'application'
      onKeyDown: @stopDefaults
    }, "THis is a test"


module.exports =
  c: App
  f: React.createFactory App

