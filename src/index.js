var App, React, ReactDOM, dispatcher;

React = require('react');

ReactDOM = require('react-dom');

App = require('./App').f;

dispatcher = require('./dispatcher');

ReactDOM.render(React.createElement(App), document.getElementById('root'));
