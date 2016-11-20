var App, React, ReactDOM;

React = require('react');

ReactDOM = require('react-dom');

App = require('./App').f;

ReactDOM.render(React.createElement(App), document.getElementById('root'));
