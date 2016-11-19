import React from 'react';


class GroceryItem extends React.Component {
  render() {
    return (
      <li>{this.props.item}</li>   
    );
  }
}

export default GroceryItem;