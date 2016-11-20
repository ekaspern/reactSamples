import React from 'react';
import GroceryItem from './groceryItem.js'


class GroceryList extends React.Component {

  constructor() {
    super();
    this.state = {
      items: ['Peanut Butter', 'Eggs', 'Yogurt'],
    };
  }

  render() {

    return (
      <div className="grocery-list">
        <h1>{this.props.name}</h1>
        <ul>
          {this.state.items.map(function(item, i){
            return <GroceryItem item={item} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

export default GroceryList;