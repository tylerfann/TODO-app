import React, { Component } from 'react';
import './Item.css';
export default class Item extends Component {

  handleRemoveItem = () => {
    this.props.onRemoveItem();
  }

  render() {
    const { item } = this.props;
    return (
      <li className="item">
        <p>{item}</p>
        <input type="button" onClick={this.handleRemoveItem}
          value="Remove" className="remove-button"
        />
      </li>
    );
  }
}