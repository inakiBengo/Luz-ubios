import { useParams } from "react-router-dom"
import { Data} from '../../types/works'
import styles from './gallery.module.css'
import { useEffect, useState } from "react"
import Information from "./components/Information/Information"
import Recommended from "./components/Recommended/Recommended"
import useGoogleSheet from "../../mocks/useGoogleSheet"
import Loader from "../../components/Loader/Loader"

interface Porps {
  data: Data[]
  loding: boolean
}

const Gallery = () => {
  const [art, setArt] = useState<Data | undefined>()
  const [pagination, setPagination] = useState<Data[] | undefined>([])
  const {id} = useParams()

  const {data, loding}: Porps = useGoogleSheet()

  useEffect(() => {
    const array:Data[] = []

    data?.forEach((element) => {
      element.id === id
      ? setArt(element)
      : null

      id && Number(element.id) >= Number(id)-2 && Number(element.id) <= Number(id)+2 && Number(element.id) !== Number(id)
      ? array.push(element)
      : null
    })

    setPagination(array)
  }, [loding])

  return (
    <div>
      {
        loding
      ? <div><Loader/></div>
      :
      <main className={styles.gallery}>
        <section>
          <Information art={art}/>
        </section>
        <section>
          <Recommended id={pagination}/>
        </section>
      </main>
      }
    </div>
  )
}

export default Gallery