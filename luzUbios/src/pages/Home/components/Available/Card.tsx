import styles from './available.module.css'
import {Data} from '../../../../types/works'

interface Props {
  card: Data
}

const Card = ({card}: Props) => {

  return (
    <a href={`/Gallery/${card.id}`} className={styles.card}>
      <div className={styles.image}>
        <img src={card.img} alt="" />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>{card.title}</p>
        <p className={styles.date}>{card.date}</p>
      </div>
    </a>
  )
}

export default Card