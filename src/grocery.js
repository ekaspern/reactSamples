var Grocery, GroceryList, React, div, h2, ref;

React = require('react');

GroceryList = require('./groceryList').f;

ref = React.DOM, div = ref.div, h2 = ref.h2;

Grocery = React.createClass({
  displayName: 'Grocery',
  getInitialState: function() {
    return {
      showList: false
    };
  },
  render: function() {
    var id, name, products, showList, store;
    store = this.props.store;
    console.log("store", store);
    id = store.id, name = store.name, products = store.products;
    showList = this.state.showList;
    return div({}, [
      h2({
        key: id,
        className: 'store',
        onClick: this.handleClick
      }, name), showList ? GroceryList({
        key: 'products',
        className: 'products-list',
        products: products
      }) : void 0
    ]);
  },
  handleClick: function() {
    var handleStoreClick, id, ref1, store;
    ref1 = this.props, handleStoreClick = ref1.handleStoreClick, store = ref1.store;
    id = store.id;
    console.log("id", id);
    handleStoreClick(id);
    return this.setState({
      showList: true
    });
  }
});

module.exports = {
  c: Grocery,
  f: React.createFactory(Grocery)
};
