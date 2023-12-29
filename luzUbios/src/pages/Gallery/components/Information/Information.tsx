import styles from './information.module.css'
import { Data } from '../../../../types/works'
import { useEffect, useRef, useState } from 'react'

interface Props {
  art: undefined | Data 
}

const Information = ({art}: Props) => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [grid, setGrid] = useState(true)
  const [colors, setColors] = useState<string[]>()
  const [images, setImages] = useState<string[]>()

  const selectColors = () => {
    setColors(art?.colors.split(', '))
  }
  const selectImages = () => {
    setImages(art?.images.split(', '))
  }

  useEffect(() => {
    selectColors()
    selectImages()
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
                <td>{art?.avaliable === 'TRUE' ?"SI" :"NO"}</td>
              </tr>
              <tr>
                <td>Dimensiones:</td>
                <td>{`${art?.x}cm x ${art?.y}cm`}</td>
              </tr>
              <tr>
                <td>Colores:</td>
                <td className={styles.colors}>
                  {
                    colors?.map((item, index) => 
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
            images?.map((item, index) => 
              <img src={item} alt="" key={index}/>  
            )
          }        
        </div>
      </div>
    </div>
  )
}

export default Information