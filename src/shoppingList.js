import React from 'react';
import GroceryItem from './groceryItem.js'


class ShoppingList extends React.Component {

  constructor() {
    super();
    this.state = {
      items: ['Peanut Butter', 'Eggs', 'Yogurt'],
    };
  }

  render() {

    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          {this.state.items.map(function(item, i){
            return <GroceryItem item={item} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;