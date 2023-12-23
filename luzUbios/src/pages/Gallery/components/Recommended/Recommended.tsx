import styles from './recommended.module.css'
import AllWork from '../../../../mocks/AllWorks.json'
import { useEffect, useState } from 'react'
import {Data} from '../../../../types/works'

interface Props {
  id: string | undefined
}

const Recommended = ({id}: Props) => {
  const [twoPrevious, setTwoPrevious] = useState<Data[] | undefined>([])
  const [twoNext, setTwoNext] = useState<Data[] | undefined>([])

  useEffect(() => { 
    const arrayPrevious:Data[] = []
    const arrayNext:Data[] = []

    AllWork.works.forEach(e => {

      if(e.id < Number(id) && e.id > (Number(id)-3)) arrayPrevious.push(e)

      if(e.id > Number(id) && e.id < (Number(id)+3)) arrayNext.push(e)

    })

    setTwoPrevious(arrayPrevious)
    setTwoNext(arrayNext)
  }, [])


  return (
    <div className={styles.recommended}>
      {
        twoPrevious?.map(item => 
          <a href={`/Gallery/${item.id}`} className={styles.cardRecommended} key={item.id}>
            <div className={styles.image}>
              <img src={item.img} alt="imagen del cuadro" />
            </div>
            <p>{item.title}</p>
          </a>  
        )
      }
      {
        twoNext?.map(item => 
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