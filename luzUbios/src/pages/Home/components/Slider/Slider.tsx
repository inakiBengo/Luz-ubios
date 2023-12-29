import { useCallback, useState } from 'react'
import styles from './slider.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import {Data} from '../../../../types/works'
 
interface Props {
  topWork: Data[] | undefined
}

const Slider = ({topWork}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [text, setText] = useState({x:0, y:0})

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const screenX = e.nativeEvent.offsetX
    const screenY = e.nativeEvent.offsetY
    setText({x: screenX + 50, y: screenY - 50})
  }

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  return (
    <>
    {
      topWork && topWork.length > 0
    ? <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {
            topWork.map(item => 
              <a href={`/Gallery/${item.id}`} className={styles.embla__slide} key={item.id} onMouseMove={e => handleMouse(e)}>
                <div className={styles.image}>
                  <img src={item.img} alt="image" />
                </div>
                <div className={styles.text} style={{top: text.y, left: text.x}} >
                  <p>{item.title}</p>
                </div>
                <div className={styles.textMovil} >
                  <p>{item.title}</p>
                </div>
              </a>
            )
          }
        </div>
      </div>

      <button className={styles.embla__prev} onClick={scrollPrev}>
        <i className="bi bi-arrow-left"></i>
      </button>
      <button className={styles.embla__next} onClick={scrollNext}>
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
    : null
  }
  </>
  )
}

export default Slider