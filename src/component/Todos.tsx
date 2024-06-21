import { useTodos } from "../store/todos";
import {useSearchParams} from "react-router-dom";

export const Todos = () => {
  const { todos, toggleAsCompleted,handleDeleteTodo } = useTodos();
  const [serachParams] = useSearchParams()
  let todosData =serachParams.get("todos")
  let filterData = todos;
  if (todosData==="active") {
    filterData = filterData.filter((task)=>!task.completed)
  }
  if (todosData==="completed") {
    filterData = filterData.filter((task)=>task.completed)
  }
  return (
    <ul className="main-task">
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={() => toggleAsCompleted(todo.id)}
            />
            <label htmlFor={todo.id}>{todo.task}</label>
            {todo.completed && (
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
