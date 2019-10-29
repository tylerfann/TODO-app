import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {
  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
}