import React, { Component } from 'react'
import CounterChild from './CounterChild'

class Counter extends Component {
  state = {
  }
  render() {
    return (
      <div><h1>Hello React</h1>
        <CounterChild />
      </div>
    )
  }
}

export default Counter;