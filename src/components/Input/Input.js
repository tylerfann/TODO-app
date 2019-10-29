import React, { Component } from 'react';
import './Input.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.onInputChange(event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.input) {
      this.props.onHandleSubmit();
      // reset input field
      document.getElementById('text-input').value = '';
    }
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input id="text-input" type="text" name="text-input" className="text-input"
         onChange={this.handleChange} />
        <input type="submit" value="Add" className="submit-button"/>
      </form>
    );
  }
}