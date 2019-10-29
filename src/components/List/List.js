import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        <Item />
      </ul>
    );
  }
}