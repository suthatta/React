import React, { Component } from 'react'
import './Toggle.css'
export default class ToggleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 2
    }
    //this.onClick = this.onClick.bind(this)
  };

  updateValue = (event) => {
    this.setState({
      value: parseInt(event.target.value, 10) || 0
    })
  }
  increase = () => {
    console.log('increase');
    this.setState({
      count: this.state.count + this.state.value
    })
  }
  decrease = () => {
    console.log('decrease');
    this.setState({
      count: this.state.count - this.state.value
    })
    console.log('decrease count', this.state.count);
  }

  reset = () => {
    this.setState({
      count: 0,
      value: 0
    })
  }

  render() {
    const { count, value } = this.state
    return (
      <div className="cool-counter">
        <div className="counter-count"><h3>{count}</h3></div>
        <div> <input type="number" value={value} onChange={this.updateValue} /></div>
        <div>
          <button onClick={this.increase}>Add</button>
          <button onClick={this.decrease}>Subtract</button>
        </div>
        <div> <button onClick={this.reset}> Reset Data</button></div>

      </div >
    )
  }
}