import React, { Component } from 'react';
import CounterCounter from './CounterCounter'
class CounterCounters extends Component {
  state = {
    counterCounters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }]
  }
  handleDelete = counterId => {
    console.log('counterId', counterId)
    const counterCounters = this.state.counterCounters
      .filter(c => c.id !== counterId);
    this.setState({ counterCounters })
  };
  render() {
    return (<div>
      {this.state.counterCounters.map(counterCounters =>
        <CounterCounter key={counterCounters.id}
          onDelete={this.handleDelete}
          value={counterCounters.value} />)}
    </div>)
  }
}
export default CounterCounters;