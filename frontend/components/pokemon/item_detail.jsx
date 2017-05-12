import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    
    this.item = this.props.item;
    return (
      <ul>
        <li>Id: {this.item.id}</li>
        <li>Name: {this.item.name}</li>
        <li>happiness: {this.item.happiness}</li>
        <li>price: {this.item.price}</li>
      </ul>
    );
  }
}

export default ItemDetail;
