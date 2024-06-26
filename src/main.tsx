import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodosProvider } from './store/todos.tsx'
import { BrowserRouter } from 'react-router-dom'
// import { TodosProvider } from './store/todos.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <TodosProvider>
    <App />
    </TodosProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
