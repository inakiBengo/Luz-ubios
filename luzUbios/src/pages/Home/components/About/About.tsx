import styles from './about.module.css'

const About = () => {

  return (
    <div className={styles.aboutContainer}>
      <h2>About</h2>
      <article className={styles.me}>
        <div className={styles.text}>
          <p className={styles.title}>Luz Ubios</p>
          <p className={styles.describ}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad autem laudantium? Voluptate, consequuntur sed? Cum necessitatibus iste nam perferendis quae eaque, debitis deleniti ut eveniet similique labore tempore. Ut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tenetur consequuntur itaque! Dolorem quos dolor, facilis modi libero et repellendus quaerat sed. Porro veniam, vero excepturi recusandae officia maxime numquam?</p>
        </div>

        <div className={styles.image}>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-e2c2e1d4aeb023cea477adbbc934b8b7-lq" alt="Luz Ubios" />
        </div>
    
      </article>
      <article className={styles.buy}>
        <p>En esta galería virtual, comparto mi pasión y creatividad a través de pinturas que reflejan mi visión única del mundo. Cada obra es una expresión personal, una ventana a mis emociones y experiencias.</p>
        <p>Explora la colección y descubre la diversidad de estilos y temas que abarco en mi arte. Desde paisajes vibrantes hasta retratos emotivos, cada cuadro cuenta una historia única.</p>
        <p>¿Te enamoraste de alguna obra? ¡Buena noticia! Todas las pinturas están disponibles para la venta. Si alguna de ellas ha capturado tu corazón, no dudes en contactarme para obtener más información o adquirir tu propia pieza de arte.</p>
        <p>Además, estoy emocionado/a de ofrecer la posibilidad de crear cuadros personalizados. ¿Tienes una idea específica en mente? ¿Quieres una obra que refleje tu personalidad o tus vivencias? Estoy aquí para convertir tu visión en una obra maestra única. Contáctame y trabajemos juntos para hacer realidad tu cuadro personalizado.</p>
        <p>La comunicación es clave, así que si tienes alguna pregunta o deseas más detalles sobre alguna pintura, ¡no dudes en enviarme un mensaje privado a través de mi cuenta de Instagram! Estoy ansioso/a de conectar contigo y compartir más sobre mi arte</p>
        <p>¡Gracias por visitar mi galería virtual! Espero que encuentres inspiración y disfrutes explorando mi mundo creativo.</p>
        <a href="https://www.instagram.com/luzubios/?hl=es" target='_blanck'>Instagram: @luzubios / Pintura Abstracta</a>
      </article>
    </div>
  )
}

export default About