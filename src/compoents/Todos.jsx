import { List } from '@mui/material'
import React from 'react'
import Todo from './Todo'
const Todos = ({list,onToggle}) => {
  
    return (
    <List>
     {list.map((todo) => (
       <Todo id={todo.id} text={todo.text} status={todo.status} toggleTodo={onToggle}/>
     ))
     }
    </List>
  )
}

export default Todos