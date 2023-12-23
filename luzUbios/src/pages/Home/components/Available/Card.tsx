import styles from './available.module.css'

interface Props {
  disponible: {
    id: number
    img: string
    title: string
    date: string
  }
}

const Card = ({disponible}: Props) => {

  return (
    <a href={`/Gallery/${disponible.id}`} className={styles.card}>
      <div className={styles.image}>
        <img src={disponible.img} alt="" />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>{disponible.title}</p>
        <p className={styles.date}>{disponible.date}</p>
      </div>
    </a>
  )
}

export default Card