import Available from "./components/Available/Available"
import Slider from "./components/Slider/Slider"
import Index from "./components/Index/Index"
import About from "./components/About/About"
import useGoogleSheet from "../../mocks/useGoogleSheet"
import { useEffect, useState } from "react"
import {Data} from '../../types/works'
import Loader from "../../components/Loader/Loader"

interface Props {
  data: Data[] | undefined
  loding: boolean
}

const Home = () => {
  const [topWork, setTopWork] = useState<Data[]>()
  const [available, setAvailable] = useState<Data[]>()
  const [urbanos, setUrbanos] = useState<Data[]>()


  const {data, loding}: Props = useGoogleSheet()

  const SearchTopWork = () => {
    setTopWork(data.slice(0, 6).reverse())
  }
  const SearchAvailable = () => {
    setAvailable(data.filter(item => item.avaliable === 'TRUE').reverse().slice(0,6))
  }
  const SearchUrbanos = () => {
    setUrbanos(data.filter(item => item.type === 'Urbanos').reverse().slice(0,6))
  }

  useEffect(() => {
    SearchTopWork()
    SearchAvailable()
    SearchUrbanos()
  }, [loding])

  return (
    <div>
      {
      loding
      ?<div><Loader/></div>
      :<main>
        <section id="proyectos">
          <Slider topWork={topWork}/>
        </section>
        <section id="disponibles">
          <Available title={'Disponibles'} data={available}/>
        </section>
        <section id="urbanos"> 
          <Available title={'Urbanos'} data={urbanos}/>
        </section>
        <section id="estatuas">
          <Available title={'Estatuas'} data={available}/>
        </section>  
        <section id="index">
          <Index data={data}/>
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      }
    </div>
  )
}

export default Home