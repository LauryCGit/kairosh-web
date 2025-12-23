import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop';

import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Políticas from './components/Footer/Politicas'
import ServiciosTodos from './pages/ServiciosCompleto/ServiciosTodos'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/politica-privacidad' element={<Políticas/>}/>
          <Route path='/todos-servicios' element={<ServiciosTodos/>}/>
        </Routes>
        <Footer/>
     
    </BrowserRouter>
           
    
  )
}

export default App
