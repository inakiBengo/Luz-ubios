import { useParams } from "react-router-dom"
import AllWorks from '../../mocks/AllWorks.json'
import { Data} from '../../types/works'
import styles from './gallery.module.css'
import { useEffect, useState } from "react"
import Information from "./components/Information/Information"
import Recommended from "./components/Recommended/Recommended"

const Gallery = () => {
  const [art, setArt] = useState<Data[] | undefined>()
  const {id} = useParams()

  useEffect(() => {
    setArt(AllWorks.works.filter((item: Data) => item.id === Number(id)))
  }, [])

  return (
    <div>
      <main className={styles.gallery}>
        <section>
          <Information art={art && art[0]}/>
        </section>
        <section>
          <Recommended id={id}/>
        </section>
      </main>
    </div>
  )
}

export default Gallery