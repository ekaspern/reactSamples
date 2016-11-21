var Request, _, http, moment;

Request = require('../utilities/server_request');

_ = require('lodash');

moment = require('moment');

http = require('http');

module.exports = {
  viewTriggers: {
    'getGroceryStores': 'getGroceryStores',
    'setGroceryStores': 'setGroceryStores',
    'getCurrentList': 'getCurrentList',
    'addGroceryListItem': 'addGroceryListItem'
  },
  getGroceryStores: function(cb) {
    console.log("test");
    return new Request({
      url: "/grocery_stores"
    }).done((function(_this) {
      return function(res) {
        return _this.dispatch('set-grocery-stores', res).then(function() {
          return typeof cb === "function" ? cb() : void 0;
        });
      };
    })(this));
  },
  setGroceryStores: function(data) {
    return this.dispatch('set-grocery-stores', data);
  },
  getCurrentList: function(id) {
    return this.dispatch('get-current-list', id);
  },
  addGroceryListItem: function(options, cb) {
    return this.dispatch('add-grocery-list-list', options).then(function() {
      return typeof cb === "function" ? cb() : void 0;
    });
  }
};
