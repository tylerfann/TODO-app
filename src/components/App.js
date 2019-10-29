import React, { Component } from 'react';
import Header from './Header/Header';
import Input from './Input/Input';
import './App.css';

export default class App extends Component {  
  render() {
    return (
      <section>
        <Header />
        <Input />
      </section>
    );
  }
}