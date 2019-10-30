import React, { Component } from 'react';
import './Item.css';
export default class Item extends Component {
  render() {
    return (
      <li className="item">
        <p>{this.props.item}</p>
        <button onClick={this.props.onRemoveItem} className="remove-button">Remove</button>
      </li>
    );
  }
}