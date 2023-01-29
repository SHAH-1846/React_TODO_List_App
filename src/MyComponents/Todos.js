import React from 'react'
import { Todo } from '../MyComponents/Todo'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todo List</h3>
      {props.todoss.length===0? "No todos to display":
      props.todoss.map((t)=>{
        return <Todo todo={t} key={t.sno} onDel={props.del} />
      })}
      
      
    </div>
  )
}
