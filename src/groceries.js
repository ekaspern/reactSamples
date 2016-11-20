var Groceries, Grocery, React, div;

React = require('react');

Grocery = require('./grocery').f;

div = React.DOM.div;

Groceries = React.createClass({
  displayName: 'Groceries',
  getInitialState: function() {
    return {
      groceryStores: [
        {
          id: 1,
          name: 'Whole Foods',
          products: ['Peanut Butter', 'Eggs', 'Yogurt']
        }, {
          id: 2,
          name: 'Harvest Coop',
          products: ['Hummus', 'Ice cream', 'Bread']
        }, {
          id: 3,
          name: 'Trader Joes',
          products: ['Potato Chips', 'Trail Mix', 'Seltzer']
        }
      ]
    };
  },
  render: function() {
    var groceryStores, i, id, len, store, stores;
    groceryStores = this.state.groceryStores;
    stores = [];
    for (i = 0, len = groceryStores.length; i < len; i++) {
      store = groceryStores[i];
      id = store.id;
      stores.push(Grocery({
        key: id,
        store: store
      }));
    }
    return div({
      key: "list"
    }, stores);
  }
});

module.exports = {
  c: Groceries,
  f: React.createFactory(Groceries)
};
