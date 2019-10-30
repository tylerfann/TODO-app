import React, { Component } from 'react';
import Input from './Input/Input';
import List from './List/List';

export default class Content extends Component {
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

  handleRemoveItem = (index) => {
   this.setState(prevState => ({
     list: prevState.list.filter((val, ind) => ind !== index)
   }));
  }

  handleRemoveAll = () => {
    this.setState({list: []});
  }

  render() {
    const { input, list } = this.state;
    return (
      <section>
        <Input input={input} onInputChange={this.handleInputChange}
          onHandleSubmit={this.handleSubmit} list={list}
          onRemoveAll={this.handleRemoveAll}
          />
        <List list={list} onRemoveItem={this.handleRemoveItem} />
      </section>
    )
  }
}