var App, React, ShoppingList, div, h2, ref;

React = require('react');

ShoppingList = require('./shoppingList').f;

require('../css/App.css');

ref = React.DOM, div = ref.div, h2 = ref.h2;

App = React.createClass({
  render: function() {
    return div({
      key: "app",
      className: "App"
    }, [
      div({
        key: 'app-header',
        className: 'App-header'
      }, "Grocery Lists"), h2({
        key: "title"
      }, "WHOLE FOODS"), ShoppingList({
        key: "shopping-list"
      })
    ]);
  }
});

module.exports = {
  c: App,
  f: React.createFactory(App)
};
