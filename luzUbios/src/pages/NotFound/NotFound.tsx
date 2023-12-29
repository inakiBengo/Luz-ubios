import styles from './notFound.module.css'

const NotFound = () => {

  return (
    <main className={styles.notFound}>

      <h1>Page not Found</h1>
      <p>Error: 404</p>

      <a href="/">recharge</a>
    </main>
  )
}

export default NotFound