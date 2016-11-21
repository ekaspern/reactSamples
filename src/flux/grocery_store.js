var Flux, _, moment;

Flux = require('delorean').Flux;

_ = require('lodash');

moment = require('moment');

module.exports = Flux.createStore({
  actions: {
    'set-grocery-stores': 'setGroceryStores',
    'get-current-list': 'getCurrentList',
    'set-grocery-list': 'setGroceryList'
  },
  scheme: {
    groceryStores: {
      "default": []
    },
    currentList: {
      "default": []
    },
    loading: {
      "default": null
    }
  },
  setGroceryStores: function(data) {
    return this.set('groceryStores', data);
  },
  getCurrentList: function(id) {
    var groceryStores, list, store;
    groceryStores = this.state.groceryStores;
    store = _.find(groceryStores, {
      id: id
    });
    list = store.products;
    return this.set({
      currentList: list
    });
  },
  setGroceryList: function(options) {
    var data, index;
    index = options.index, data = options.data;
    this.state.groceryStores[index].products = data;
    return this.set({
      groceryStores: this.state.groceryStores
    });
  }
});
