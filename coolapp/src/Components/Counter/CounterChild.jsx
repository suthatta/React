import React, { Component } from 'react';

export default class CounterChild extends Component {
  render() {
    const { text } = this.props;

    return <p>{text || 'Im a CounterChild'}</p>
  }
}
