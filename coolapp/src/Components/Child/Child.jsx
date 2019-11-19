import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    const { text } = this.props;

    return <p>{text || 'Im a Child'}</p>
  }
}
