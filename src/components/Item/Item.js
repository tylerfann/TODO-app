import React, { Component } from 'react';
import './Item.css';
export default class Item extends Component {
  render() {
    const { item, onRemoveItem } = this.props;
    return (
      <li className="item">
        <p>{item}</p>
        <input type="button" onClick={onRemoveItem}
          value="Remove" className="remove-button"
        />
      </li>
    );
  }
}