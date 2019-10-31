import React, { Component } from 'react';
import './Input.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleSubmit = () => {
    const { input } = this.state;
    if (input) {
      this.props.onHandleSubmit(input);
      this.setState({input:''}) 
    }
  }
  
  handleChange = (event) =>{
    this.setState({[event.target.name]: event.target.value});
  }

  handleRemoveAll = () => {
    this.props.onRemoveAll();
    this.setState({input: ''});
  }

  render() {
    const { list } = this.props;
    return (
      <form className="form-container">
        <input onChange={this.handleChange} value={this.state.input}
          id="text-input" type="text" name="input" className="text-input"
        />
        <input type="button" onClick={this.handleSubmit}
          value="Add" className="submit-button"
        />
        <input type="button" onClick={list.length ? this.handleRemoveAll : null}
          value="Remove all" className="submit-button"
        />
      </form>
    );
  }
}