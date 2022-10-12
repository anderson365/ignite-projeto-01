import './global.css'
import styles from './App.module.css'

import { Post } from './Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
  <>
    <Header />
    
    <div className={styles.wrapper}>

      <Sidebar/>

      <main>
        <Post 
          author="Anderson Ricardo" 
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis perspiciatis consequuntur molestiae sapiente consequatur vero maiores voluptas aliquid tenetur ipsum quas dolorum reprehenderit natus a suscipit, veritatis exercitationem iusto! Suscipit."
        />
        <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis perspiciatis consequuntur molestiae sapiente consequatur vero maiores voluptas aliquid tenetur ipsum quas dolorum reprehenderit natus a suscipit, veritatis exercitationem iusto! Suscipit."
        />
      </main>

    </div>



  </>
  )
}
