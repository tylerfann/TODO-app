import React, { Component } from 'react';
import './Input.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      list: []
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.input) {
      console.log(this.state.input);
      this.setState({
        input: ''
      });
      document.getElementById('text-input').value = '';
      this.state.list.push(this.state.input);
      console.log(this.state.list);
    }
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input id="text-input" type="text" name="text-input" className="text-input"
        value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Add" className="submit-button"/>
      </form>
    );
  }
}