import { AddTodo } from "./component/AddTodo"
import { Navbar } from "./component/Navbar"
import { Todos } from "./component/Todos"
import "./App.css"


function App() {

  return (
    <main>
      <h1>TODO REACT USING TYPESCRIPT</h1>
      <Navbar/>
      <AddTodo />
      <Todos/>
    </main>
  )
}

export default App
