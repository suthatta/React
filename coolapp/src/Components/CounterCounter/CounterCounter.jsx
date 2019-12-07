import React, { Component } from 'react';

class CounterCounter extends Component {
  state = {
    counterCounter: this.props.value
  }
  handleIncrement = () => {
    this.setState({ counterCounter: this.state.counterCounter + 1 });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm">
          Increment</button>
        <button
          onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm">
          Delete</button>
      </div>
    )
  }
  getBadgeClasses() {
    let myClass = "badge m-2 badge-";
    myClass += this.state.counterCounter === 0 ? "warning" : "primary";
    return myClass;
  }
  formatCount() {
    const { counterCounter } = this.state;
    return counterCounter === 0 ? 'Zero' : counterCounter;
  }


}


export default CounterCounter;