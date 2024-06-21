// import React from 'react'

import { useState } from "react"
import { useTodos} from "../store/todos"

export const AddTodo = () => {
    const [todo , setTodo] = useState("")
    const {handleTodo}=useTodos();
    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleTodo(todo)
        setTodo("")
    }

  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type="submit">add</button>
    </form>
  )
}
