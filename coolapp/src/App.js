import React, { Component } from 'react';
import './App.css';
import Parent from './Components/Parent'
import ToggleComponent from './Components/ToggleComponent/index'
import Counter from './Components/Counter/Counter'
class App extends Component {
  /*  propTypes = {
      initialCount: React.PropTypes.number
    }
    defaultProps = { initialValue: 5, initialCount: 0 };*/

  render() {
    return (
      <div>
        <h1>Cool-App</h1>
        <ToggleComponent />

        <Counter />
      </div>

    );
  }
}
export default App;

