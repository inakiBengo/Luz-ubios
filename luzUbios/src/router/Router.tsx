import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Gallery from "../pages/Gallery/Gallery"
import NotFound from "../pages/NotFound/NotFound"

const Router = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="gallery/:id" element={<Gallery/>}/>
        <Route path="" element={<Navigate to='home'/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default Router