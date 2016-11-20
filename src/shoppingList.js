var GroceryItem, React, ShoppingList, div, ref, ul;

React = require('react');

GroceryItem = require('./groceryItem').f;

ref = React.DOM, div = ref.div, ul = ref.ul;

ShoppingList = React.createClass({
  displayName: 'ShoppingList',
  getInitialState: function() {
    return {
      items: ['Peanut Butter', 'Eggs', 'Yogurt']
    };
  },
  render: function() {
    var i, item, items, len, list;
    items = this.state.items;
    list = [];
    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      list.push(GroceryItem({
        key: item,
        product: item
      }));
    }
    return div({
      key: "list"
    }, ul({
      className: 'shopping-list'
    }, list));
  }
});

module.exports = {
  c: ShoppingList,
  f: React.createFactory(ShoppingList)
};
