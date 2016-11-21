var Flux, Groceries, Grocery, GroceryItem, React, div, h2, ref;

React = require('react');

Grocery = require('./grocery').f;

GroceryItem = require('./groceryItem').f;

Flux = require('delorean').Flux;

ref = React.DOM, div = ref.div, h2 = ref.h2;

Groceries = React.createClass({
  mixins: [Flux.mixins.storeListener],
  watchStores: ['grocery'],
  displayName: 'Groceries',
  render: function() {
    var currentList, displayItems, groceryStores, i, id, item, j, len, len1, ref1, store, stores;
    ref1 = this.getStore('grocery'), groceryStores = ref1.groceryStores, currentList = ref1.currentList;
    stores = [];
    displayItems = [];
    for (i = 0, len = groceryStores.length; i < len; i++) {
      store = groceryStores[i];
      id = store.id;
      stores.push(Grocery({
        key: id,
        store: store,
        handleStoreClick: this.handleStoreClick
      }));
    }
    if (currentList != null) {
      for (j = 0, len1 = currentList.length; j < len1; j++) {
        item = currentList[j];
        displayItems.push(GroceryItem({
          key: item,
          product: item
        }));
      }
    }
    return div({
      key: "list"
    }, [
      div({
        key: "store",
        className: 'grocery-stores'
      }, stores), currentList.length ? div({
        key: "store-list",
        className: 'current-list'
      }, [
        h2({
          key: 'title'
        }, "Current List"), displayItems
      ]) : void 0
    ]);
  },
  handleStoreClick: function(id) {
    return this.trigger('getCurrentList', id);
  }
});

module.exports = {
  c: Groceries,
  f: React.createFactory(Groceries)
};
