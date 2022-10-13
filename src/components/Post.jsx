import styles from './Post.module.css'


export function Post(){

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/anderson365.png"/>
          <div className={styles.authorInfo}>
            <strong>Anderson Ricardo</strong>
            <span>Picanha mal passada</span>
          </div>
        </div>

        <time title="13 de Outubro às 16:21" dateTime="2022-10-13 16:21:50">Publicado há 1h</time>

      </header>

      <div className={styles.content}>
        <p>Falaa Galeraaaa</p>
        <p>Próxima semana tem churras da confra da firma! Todos estão convidados. Aqueles que estão interesados, favor marcar sua presença no link abaixo, vlw!!</p>
        <p>
          <a href="google.com">Link do churras</a>
        </p>
        <p>
          <a href="#">#churras</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

    </article>
    
  )



}