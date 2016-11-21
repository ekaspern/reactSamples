var Flux, Groceries, Grocery, React, div;

React = require('react');

Grocery = require('./grocery').f;

Flux = require('delorean').Flux;

div = React.DOM.div;

Groceries = React.createClass({
  mixins: [Flux.mixins.storeListener],
  watchStores: ['grocery'],
  displayName: 'Groceries',
  render: function() {
    var groceryStores, i, id, len, store, stores;
    groceryStores = this.getStore('grocery').groceryStores;
    console.log("groceryStores", groceryStores);
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
