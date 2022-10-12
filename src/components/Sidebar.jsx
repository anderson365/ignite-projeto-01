import styles from './Sidebar.module.css'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img src="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=40" />

      <div className={styles.profile}>
        <strong>Anderson Ricardo</strong>
        <span>Picanha mal passada</span>
      </div>

      <footer>
        <a href='#'>Editar seu perfil</a>
      </footer>

    </aside>

  )
}