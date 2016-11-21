var Flux, Groceries, Grocery, GroceryItem, React, div, h2, input, ref, ul;

React = require('react');

Grocery = require('./grocery').f;

GroceryItem = require('./groceryItem').f;

Flux = require('delorean').Flux;

ref = React.DOM, div = ref.div, h2 = ref.h2, ul = ref.ul, input = ref.input;

Groceries = React.createClass({
  mixins: [Flux.mixins.storeListener],
  watchStores: ['grocery'],
  displayName: 'Groceries',
  getInitialState: function() {
    return {
      newList: null
    };
  },
  render: function() {
    var currentColor, currentList, displayItems, groceryStores, i, id, item, j, len, len1, newList, ref1, store, stores;
    ref1 = this.getStore('grocery'), groceryStores = ref1.groceryStores, currentList = ref1.currentList, currentColor = ref1.currentColor;
    newList = this.state.newList;
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
          key: "item" + item,
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
          key: 'current-title',
          style: {
            color: currentColor
          }
        }, "Current List"), ul({
          key: 'current-list'
        }, displayItems), input({
          key: 'input-add',
          type: 'text',
          ref: 'listname',
          value: newList || '',
          onChange: this.handleChange
        }), div({
          key: 'button-add',
          className: 'list-add',
          onClick: this.handleAddClick
        }, "Add to Current List")
      ]) : void 0
    ]);
  },
  handleStoreClick: function(id) {
    return this.trigger('getCurrentList', id);
  },
  handleAddClick: function() {
    var currentStore, newlistname;
    currentStore = this.getStore('grocery').currentStore;
    newlistname = this.refs.listname.value;
    return this.trigger('addGroceryListItem', {
      id: currentStore,
      listname: newlistname
    }, this.clearInput);
  },
  handleChange: function(e) {
    var value;
    value = e.target.value;
    return this.setState({
      newList: value
    });
  },
  clearInput: function() {
    return this.setState({
      newList: null
    });
  }
});

module.exports = {
  c: Groceries,
  f: React.createFactory(Groceries)
};
