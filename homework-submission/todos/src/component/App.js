import React from 'react'
import { Todo } from './Todo'

export class App extends React.Component {

  todolist = [
    { id: 1, description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
    { id: 2, description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
    { id: 3, description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }
  ]
  render() {
    return (

      <ul className="todoList">
        <h3>Todos</h3>
        {this.todolist.map(list => {
          return (
            <Todo key={list.id} description={list.description} deadline={list.deadline} />
          );
        })}
      </ul>
    )
  }
}
