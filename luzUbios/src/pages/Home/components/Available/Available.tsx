import Card from './Card'
import styles from './available.module.css'
import {works} from '../../../../types/works'

interface Props {
  title: string
  data: works
} 

const Available = ({title, data}: Props) => {

  return (
    <div className={styles.availableContainer}>
      <h2 className={styles.category}>{title}</h2>
      <div className={styles.available}>
        {
          data.works.map(item => 
            <div key={item.id}>
              <Card disponible={item}/>
            </div>  
          )
        }
      </div>
    </div>
  )
}

export default Available