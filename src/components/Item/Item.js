import React, { Component } from 'react';
import './Item.css';
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      input: this.props.item
    };
  }

  handleRemoveItem = () => {
    this.props.onRemoveItem();
  }

  handleEdit = () => {
    this.setState({edit: true})
  }

  handleDone = () => {
    this.setState
    this.setState({edit: false})
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  render() {
    const { edit, input } = this.state;
    return (
      <li className="item">
      {edit ? <input type="text" value={input} onChange={this.handleChange} /> : 
      <p>{input}</p>
      }
        <div>
          <input type="button" onClick={!edit ? this.handleEdit : this.handleDone}
            value={!edit ? "Edit" : "Done"} className="edit-button"
          />
          <input type="button" onClick={this.handleRemoveItem}
            value="Remove" className="remove-button"
          />
        </div>
      </li>
    );
  }
}