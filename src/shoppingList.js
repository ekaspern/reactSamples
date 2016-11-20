var ShoppingList, div;

import React from 'react';

div = React.DOM.div;

ShoppingList = React.createClass({
  displayName: 'ShoppingList',
  getInitialState: function() {
    return {
      items: ['Peanut Butter', 'Eggs', 'Yogurt']
    };
  },
  render: function() {
    return div({
      className: 'shopping-list'
    }, 'THIS IS  ATEST');
  }
});

module.exports = {
  c: ShoppingList,
  f: React.createFactory(ShoppingList)
};
