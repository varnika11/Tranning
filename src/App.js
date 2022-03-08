import React, { useState } from 'react'
import Todos from './compoents/Todos';
function App() {
 const[todos,setTodos] = useState([
     {id:1,text:"Buy pens",status:true},
     {id:2,text:"Buy scale",status:false},
     {id:3,text:"Buy pencil",status:false},
     {id:4,text:"Buy eraser",status:true},
     {id:5,text:"Buy colorpencils",status:false},
 ]);
    const toggleTodo =(e) =>{
        console.log(e)
        setTodos(
            todos.map((todo)=> todo.id==e.id ? {...todo,status:!e.status} : todo
     )
     )
    };
   

  return (
    <div>
        <h1>Items to buy</h1>
      <Todos list={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;