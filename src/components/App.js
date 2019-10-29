import React, { Component } from 'react';
import Header from './Header/Header';
import Input from './Input/Input';
import './App.css';
import List from './List/List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      list: []
    };
  }

  handleInputChange = (input) => {
    this.setState({input: input});
  }

  handleSubmit = () => {
    this.state.list.push(this.state.input);
    // reset state
    this.setState({input: ''});
  }

  render() {
    const { input, list } = this.state;
    return (
      <section>
        <Header />
        <Input input={input} onInputChange={this.handleInputChange}
          onHandleSubmit={this.handleSubmit}
        />
        <List list={list} />
      </section>
    );
  }
}