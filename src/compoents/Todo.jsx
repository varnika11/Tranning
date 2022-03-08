import React from 'react'
import { ListItem, ListItemButton, ListItemText } from '@mui/material'

import Checkbox from '@mui/material/Checkbox'
const Todo = (todo) => {
  return (
     <ListItem secondaryAction={
              <Checkbox
                edge="end"
                onChange={()=>todo.toggleTodo(todo)}
                checked={todo.status}
                 />}> 
         <ListItemButton>
            <ListItemText>
        {todo.text}  {todo.status == true ?"✅":"❌"}
            </ListItemText>
          </ListItemButton>
        </ListItem>
  )
}

export default Todo