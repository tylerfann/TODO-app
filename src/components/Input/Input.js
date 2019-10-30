import React, { Component } from 'react';
import './Input.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleSubmit = (event) => {
    //this.props.onInputChange(inputValue);
    this.props.onHandleSubmit(this.state.input);
    this.setState({input:''})
      // reset input field
  }
  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { list, onRemoveItem } = this.props;
    return (
      <div>
      <form className="form-container">
        <input onChange={this.onChange} value={this.state.input} id="text-input" type="text" name="input" className="text-input"
          />
        <input type="button" onClick={this.handleSubmit} value="Add" className="submit-button"/>
      </form>
      </div>
    );
  }
}