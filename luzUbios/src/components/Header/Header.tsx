import { useState } from 'react'
import styles from './header.module.css'

const Header = () => {
  const [menu, setMenu] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href='/home' className={styles.logo}>
          <img src="/public/favicon.png" alt="" />
        </a>
        <div className={styles.menu}>
          <button onClick={() => setMenu(true)}>Menu</button>

          <div className={menu ?styles.navMenu :styles.navNone} >
            <div className={styles.navHeader}>
              <a href="/home">
                <img src="/public/favicon.png" alt="" />
              </a>
              <button onClick={() => setMenu(false)}>Close</button>
            </div>
            <nav>
              <ul>
                <li onClick={() => setMenu(false)}><a href="/home#proyectos">Proyectos destacados</a></li>
                <li onClick={() => setMenu(false)}><a href="/home#disponibles">Disponibles</a></li>
                <li onClick={() => setMenu(false)}><a href="/home#urbanos">Urbanos</a></li>
                <li onClick={() => setMenu(false)}><a href="/home#estatuas">Estatuas</a></li>
                <li onClick={() => setMenu(false)}><a href="/home#index">Index</a></li>
                <li onClick={() => setMenu(false)}><a href="/home#about">About</a></li>
              </ul>
            </nav>
          </div>
        
        </div>
      </div>
    </header>
  )
}

export default Header