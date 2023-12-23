import styles from './footer.module.css'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.title}> 
        <p>Ubios</p>
      </div>
      <div className={styles.navFooter}>
        <a href="https://www.instagram.com/luzubios/?hl=es">Instagram</a>
        <a href="https://www.facebook.com/luz.ubios">Fcebook</a>
      </div>
      <p className={styles.contact}>bengoinaki@gmail.com</p>
    </footer>
  )
}

export default Footer