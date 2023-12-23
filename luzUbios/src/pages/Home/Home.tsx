import Available from "./components/Available/Available"
import Slider from "./components/Slider/Slider"
import topWorkData from '../../mocks/topWorksData.json'
import AvailableData from '../../mocks/AvailableData.json'
import urbanData from '../../mocks/urbanData.json'
import StatuesData from '../../mocks/StatuesData.json'
import Index from "./components/Index/Index"
import allWorks from '../../mocks/AllWorks.json'
import About from "./components/About/About"

const Home = () => {

  return (
    <div>
      <main>
        <section id="proyectos">
          <Slider topWork={topWorkData}/>
        </section>
        <section id="disponibles">
          <Available title={'Disponibles'} data={AvailableData}/>
        </section>
        <section id="urbanos"> 
          <Available title={'Urbanos'} data={urbanData}/>
        </section>
        <section id="estatuas">
          <Available title={'Estatuas'} data={StatuesData}/>
        </section>  
        <section id="index">
          <Index data={allWorks}/>
        </section>
        <section id="about">
          <About />
        </section>
      </main>
    </div>
  )
}

export default Home