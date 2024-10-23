import styles from "./Footer.module.css"
export default function Footer({completedtodo, totalTodo}) {
  return (
    <div className={styles.footer}>
      <p>
        Completed: {completedtodo}
      </p>
      <p>
        Total: {totalTodo}
      </p>
    </div> 
  )
}