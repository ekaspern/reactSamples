var App, Flux, Groceries, React, div, h2, ref;

React = require('react');

Flux = require('delorean').Flux;

Groceries = require('./groceries').f;

require('../css/App.css');

ref = React.DOM, div = ref.div, h2 = ref.h2;

App = React.createClass({
  mixins: [Flux.mixins.storeListener],
  watchStores: ['grocery'],
  componentWillMount: function() {
    var groceryStores;
    groceryStores = [
      {
        id: 1,
        name: 'Whole Foods',
        products: ['Peanut Butter', 'Eggs', 'Yogurt'],
        color: 'green'
      }, {
        id: 2,
        name: 'Harvest Coop',
        products: ['Hummus', 'Ice cream', 'Bread'],
        color: 'blue'
      }, {
        id: 3,
        name: 'Trader Joes',
        products: ['Potato Chips', 'Trail Mix', 'Seltzer'],
        color: 'red'
      }
    ];
    this.trigger('getGroceryStores');
    return this.trigger('setGroceryStores', groceryStores);
  },
  render: function() {
    return div({
      key: "app",
      className: "App"
    }, [
      div({
        key: 'app-header',
        className: 'App-header'
      }, "Grocery Lists"), Groceries({
        key: 'stores'
      })
    ]);
  }
});

module.exports = {
  c: App,
  f: React.createFactory(App)
};
