import styles from './index.module.css'
import {Data} from '../../../../types/works'
import { useState } from 'react'

interface Props {
  data: Data[]
}

const Index = ({data}: Props) => {
  const [clientX, setClientX] = useState(0)

  const handleMosue = (e: React.MouseEvent<HTMLElement>) => {
    setClientX(e.clientX)
  }

  return (
    <div className={styles.indexContainer}>
      <h2 className={styles.category}>Index</h2>
      <div className={styles.index}>
        {
          data.map(item => 
            <article className={styles.card} key={item.id}onMouseMove={(e) => handleMosue(e)}>
              <a href={`Gallery/${item.id}`}>
                <p className={styles.id}>{item.id}</p>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.date}>{item.date}</p>
                <p className={styles.dimensions}>{`${item.x}cm x ${item.y}cm`}</p>
              </a>
              <div className={styles.image} style={{left: clientX}}>
                <img src={item.img} alt="image" />
              </div>  
            </article>
          )
        }
      </div>
    </div>
  )
}

export default Index