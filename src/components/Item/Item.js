import React, { Component } from 'react';
import './Item.css';
export default class Item extends Component {
  render() {
    return (
      <li className="item">{this.props.item}</li>
    );
  }
}