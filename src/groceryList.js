var GroceryItem, GroceryList, React, div, ref, ul;

React = require('react');

GroceryItem = require('./groceryItem').f;

ref = React.DOM, div = ref.div, ul = ref.ul;

GroceryList = React.createClass({
  displayName: 'GroceryList',
  render: function() {
    var i, item, len, list, products;
    products = this.props.products;
    list = [];
    for (i = 0, len = products.length; i < len; i++) {
      item = products[i];
      list.push(GroceryItem({
        key: item,
        product: item
      }));
    }
    return div({
      key: "list"
    }, ul({
      className: 'grocery-list'
    }, list));
  }
});

module.exports = {
  c: GroceryList,
  f: React.createFactory(GroceryList)
};
