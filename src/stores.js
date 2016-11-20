var React, Store, Stores, div;

React = require('react');

Store = require('./store').f;

div = React.DOM.div;

Stores = React.createClass({
  displayName: 'Stores',
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
      console.log("store", store);
      stores.push(Store({
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
  c: Stores,
  f: React.createFactory(Stores)
};
