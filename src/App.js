var App, React, div;

React = require('react');

div = React.DOM.div;

App = React.createClass({
  render: function() {
    return div({
      className: 'application',
      onKeyDown: this.stopDefaults
    }, "THis is a test");
  }
});

module.exports = {
  c: App,
  f: React.createFactory(App)
};
