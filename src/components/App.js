import React, { Component } from 'react';
import Header from './Header/Header';
import Input from './Input/Input';
import List from './List/List';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  handleInputChange = (input) => {
    this.setState({input: input});
  }

  handleSubmit = (value) => {
    this.setState(prevState => ({
      list: [...prevState.list, value]
    }));
  }

  handleRemoveItem = (item) => {
    this.setState(prevState => ({
      list: prevState.list.filter(val => val !== item)
    }));
  }

  handleRemoveAll = () => {
    this.setState({list: []});
  }

  render() {
    const { input, list } = this.state;
    return (
      <section>
        <Header />
        <Input input={input} onInputChange={this.handleInputChange}
          onHandleSubmit={this.handleSubmit} list={list}
          onRemoveItem={this.handleRemoveItem} onRemoveAll={this.handleRemoveAll}
        />
        <List list={list} onRemoveItem={this.handleRemoveItem} />
      </section>
    );
  }
}