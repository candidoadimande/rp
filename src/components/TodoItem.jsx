  import styles from "./todoItem.module.css"
  export default function({item, todos, setTodos}) {
    function handleDelete(item) {
      setTodos(todos.filter((todo) => todo !==item))
    }
    function handleClick(name) {
      setTodos(
        todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo)
      )
    }
    const className = item.done ? styles.completed : "";
    return (
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span className={className} onClick={() =>handleClick(item.name)}>{item.name}</span>
          <span className={styles.deleteItem}>
            <button onClick={() => handleDelete(item)}>X</button>
          </span>
        </div>
      </div>
    )
  }