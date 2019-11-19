import React, { Component } from 'react'
import Child from '../Child'
export default class Parent extends Component {

  render() {
    return (
      <div className='Parent'>
        <p>Hi there</p>
        <Child text='Eat your Food!!' />
        <Child text='Helo Child 2!' />
        <Child text='Helo Child 3!' />
      </div>
    )
  }

}