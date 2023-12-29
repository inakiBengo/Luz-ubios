import styles from './recommended.module.css'
import {Data} from '../../../../types/works'

interface Props {
  id: Data[] | undefined
}

const Recommended = ({id}: Props) => {

  return (
    <div className={styles.recommended}>
      {
        id?.map(item => 
          <a href={`/Gallery/${item.id}`} className={styles.cardRecommended} key={item.id}>
            <div className={styles.image}>
              <img src={item.img} alt="imagen del cuadro" />
            </div>
            <p>{item.title}</p>
          </a>  
        )
      }
    </div>
  )
}

export default Recommended