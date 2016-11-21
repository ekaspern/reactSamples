var Flux, _, moment;

Flux = require('delorean').Flux;

_ = require('lodash');

moment = require('moment');

module.exports = Flux.createStore({
  actions: {
    'set-grocery-stores': 'setGroceryStores',
    'get-current-list': 'getCurrentList',
    'set-grocery-list': 'setGroceryList',
    'add-grocery-list-list': 'addGroceryListItem'
  },
  scheme: {
    groceryStores: {
      "default": []
    },
    currentList: {
      "default": []
    },
    currentColor: {
      "default": null
    },
    currentStore: {
      "default": null
    },
    loading: {
      "default": null
    }
  },
  setGroceryStores: function(data) {
    return this.set('groceryStores', data);
  },
  getCurrentList: function(id) {
    var color, groceryStores, list, store;
    groceryStores = this.state.groceryStores;
    store = _.find(groceryStores, {
      id: id
    });
    list = store.products;
    color = store.color;
    return this.set({
      currentList: list,
      currentColor: color,
      currentStore: id
    });
  },
  setGroceryList: function(options) {
    var data, index;
    index = options.index, data = options.data;
    this.state.groceryStores[index].products = data;
    return this.set({
      groceryStores: this.state.groceryStores
    });
  },
  addGroceryListItem: function(options) {
    var groceryStores, id, listname, store;
    id = options.id, listname = options.listname;
    groceryStores = this.state.groceryStores;
    store = _.find(groceryStores, {
      id: id
    });
    store.products.push(listname);
    return this.set({
      groceryStores: groceryStores
    });
  }
});
