React = require 'react'
ReactDOM = require 'react-dom'
App = require('./App').f

dispatcher = require './dispatcher'

# @import '../css/App.css'

# ReactDOM.render React.createElement(App, {}), document.getElementById('root')


ReactDOM.render React.createElement(App), document.getElementById('root')
