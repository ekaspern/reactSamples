var GroceryItem, React, li;

React = require('react');

li = React.DOM.li;

GroceryItem = React.createClass({
  displayName: 'GroceryItem',
  render: function() {
    var product;
    product = this.props.product;
    return li({
      className: 'grocery-item'
    }, product);
  }
});

module.exports = {
  c: GroceryItem,
  f: React.createFactory(GroceryItem)
};
