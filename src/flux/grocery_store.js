var Flux, _, moment;

Flux = require('delorean').Flux;

_ = require('lodash');

moment = require('moment');

module.exports = Flux.createStore({
  actions: {
    'set-grocery-stores': 'setGroceryStores',
    'set-grocery-list': 'setGroceryList'
  },
  scheme: {
    groceryStores: {
      "default": []
    },
    loading: {
      "default": null
    }
  },
  setGroceryStores: function(data) {
    return this.set('groceryStores', data);
  },
  setGroceryList: function(options) {
    var data, id;
    id = options.id, data = options.data;
    this.state.groceryStores[id].lists = data;
    return this.set({
      groceryStores: this.state.groceryStores
    });
  }
});
