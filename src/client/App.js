import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Hi there!</h1>
        <button type="button" className="ui primary button">
          Hi
        </button>
      </div>
    );
  }
}
