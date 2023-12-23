import styles from './information.module.css'
import { Data } from '../../../../types/works'
import { useEffect, useRef, useState } from 'react'

interface Props {
  art: undefined | Data 
}

const Information = ({art}: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [grid, setGrid] = useState(true)
 
  useEffect(() => {
    const timer = setTimeout(() => {
      if(imageRef.current)
      if(1.3 < (imageRef.current.naturalWidth / imageRef.current.naturalHeight)) {
        setGrid(false)
      } else {
        setGrid(true)
      }
    }, 200)
  
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={grid ?styles.information :styles.infoWidth} style={{backgroundColor: `${art?.color}`}}>

      <header className={styles.header}>
        <h1>{art?.title}</h1>
        <p className={styles.text}>{art?.text}</p>
        <p className={styles.date}>{art?.date}</p>

        <div className={styles.table}>
          <table>
            <tbody>
              <tr>
                <td>Disponible:</td>
                <td>{art?.available ?"SI" :"NO"}</td>
              </tr>
              <tr>
                <td>Dimensiones:</td>
                <td>{`${art?.dimensions.x}cm x ${art?.dimensions.y}cm`}</td>
              </tr>
              <tr>
                <td>Colores:</td>
                <td className={styles.colors}>
                  {
                    art?.colors.map((item, index) => 
                      <span key={index} className={styles.color}>{item}</span>  
                    )
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </header>

      <div className={styles.image}>
        <img src={art?.img} alt="" ref={imageRef}/>
      </div>

      <div className={styles.info}>
        
        <h2>Imagenes relacionadas</h2>
        
        <div className={styles.images}>
          {
            art?.images.map((item, index) => 
              <img src={item.src} alt="" key={index}/>  
            )
          }        
        </div>
      </div>
    </div>
  )
}

export default Information