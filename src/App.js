var App, Groceries, React, div, h2, ref;

React = require('react');

Groceries = require('./groceries').f;

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
      }, "Grocery Lists"), Groceries({
        key: 'stores'
      })
    ]);
  }
});

module.exports = {
  c: App,
  f: React.createFactory(App)
};
