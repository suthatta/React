import React from 'react'

export const Todo = props => {
  console.log(props)
  return (
    <li>
      <span>{props.id}</span>
      <span class="description">Todo: {props.description},</span>
      <span>Deadline: {props.deadline}</span>
    </li>
  )
}
