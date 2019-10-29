import React, { Component } from 'react';
import './List.css';
import Item from '../Item/Item';
import '../Item/Item.css';
export default class List extends Component {

  render() {
    const { list } = this.props;
    return (
      <section className="list-container">
      {list.length ? list.map(item => {
        return (
          <ul className="list">
            <Item item={item}/>
          </ul>
        );
      }) : <p className="item">You have nothing to do yet...</p>
      }
      </section>
    );
  }
}