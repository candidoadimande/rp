  import { useState } from "react"
  import style from "./Form.module.css"
  export default function Form({todos, setTodos}) {
    //const [todo, setTodo] = useState("");
    const [todo, setTodo] = useState({name: "", done: false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo ({name: "", done: false});
  }
    return (
      <div>
        <form className={style.todoform} onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <input 
            className={style.moderninput}
            onChange={(e) => setTodo({name: e.target.value, done: false})} 
            type="text" 
            value={todo.name}
            placeholder="Enter todo list"
          />
          <button className={style.button} type="submit">Add</button>
          </div>
        </form> 
      </div>
    )
  }
  