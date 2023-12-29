import Card from './Card'
import styles from './available.module.css'
import {Data} from '../../../../types/works'

interface Props {
  data: Data[] | undefined
  title: string
} 

const Available = ({data, title}: Props) => {

  return (
    <div className={styles.availableContainer}>
      <h2 className={styles.category}>{title}</h2>
      <div className={styles.available}>
        {
          data?.map(item => 
            <div key={item.id}>
              <Card card={item}/>
            </div>  
          )
        }
      </div>
    </div>
  )
}

export default Available