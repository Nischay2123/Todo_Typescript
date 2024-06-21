import { ReactNode, createContext, useContext, useState } from "react";

export type todoProviderProps ={
    children : ReactNode
}

export type Todo ={
    id:string;
    task:string;
    completed:boolean
}

export type todoContext={
    todos:Todo[];
    handleTodo:(task:string)=>void;
    toggleAsCompleted:(id:string)=>void;
    handleDeleteTodo:(id:string)=>void;
}

export const todoscontext = createContext<todoContext | null>(null);


export const TodosProvider = ({children}:todoProviderProps)=>{
    const [todos,setTodos]=useState<Todo[]>(() => {
        try {
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[]
        } catch (error) {
            return []
        }
    });
    const handleTodo = (task:string) => {
        setTodos((prev) =>{
          const newTodos:Todo[] = [
            {
                id:Math.random().toString(),
                task:task,
                completed:false,
                // createdAt:new Date()
            },
            ...prev
          ] 
        //   console.log("my previous " + prev);          
        //   console.log(newTodos);       
        localStorage.setItem("todos",JSON.stringify(newTodos))
        return newTodos
        })
    }
    const toggleAsCompleted =(id:string)=>{
        setTodos((prev)=>{
            let newTodos=prev.map((todo)=>{
                if (todo.id===id) {
                    return {...todo, completed:! todo.completed}
                }
                return todo
            })
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }
    const handleDeleteTodo =(id: string)=>{
        setTodos((prev)=>{
            let newTodos = prev.filter((todo)=>todo.id!=id)
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }
    return <todoscontext.Provider value={{todos,handleTodo,toggleAsCompleted,handleDeleteTodo}}>
    {children}
    </todoscontext.Provider>
}


export const useTodos = () => {
    const todosConsumer = useContext(todoscontext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }
    return todosConsumer;
}