import React from 'react'

export const Todo = ({todo,onDel}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>onDel(todo)}>Delete</button>
    </div>
  )
}
