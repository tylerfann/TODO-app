import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';

export default class List extends Component {

  render() {
    const { list } = this.props;
    return (
      <ul>
      {list.length ? list.map(item => {
        return (
          <Item item={item}/>
        );
      }) :
      <p>You have nothing to do yet..</p>
      }
      </ul>
    );
  }
}