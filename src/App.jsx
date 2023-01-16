import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import OurCompany from './pages/OurCompany';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import { Nav } from './pages/Nav';
import { Footer } from './pages/Footer';
function App() {
  return (
    <>
    {/* <Nav /> */}
      <BrowserRouter >
        <Nav />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ourcompany' element={<OurCompany />} />
            <Route path='/locations' element={<Locations />} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
  </>
  )
}

export default App
