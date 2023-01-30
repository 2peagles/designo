import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import OurCompany from './pages/OurCompany';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import { Nav } from './pages/Nav';
import { Footer } from './pages/Footer';
import { Webdesign } from './pages/Webdesign';
import { Appdesign } from './pages/Appdesign';
import { Graphicdesign } from './pages/Graphicdesign';

function App() {
  return (
    <>
    {/* <Nav /> */}
      <BrowserRouter >
        <Nav />
       {/* <Home /> */}
          <Routes>
            {/* <Route path='/(home|ourcompany|locations|contact)|appdesign|webdesign}graphicdesign/'component={Home}/> */}
            <Route path='/' element={<Home/>} />
            <Route path='/ourcompany/*' element={<OurCompany />} />
            <Route path='/locations/*' element={<Locations />} />
            <Route path='/contact/*' element={<Contact/>} />
            <Route path='/webdesign/*' element={<Webdesign />} />
            <Route path='/appdesign/*' element={<Appdesign />} />
           {/* <Route path='/webdesign/appdesign' element={<Appdesign />} /> */}
            <Route path='/graphicdesign/*' element={<Graphicdesign/>} />
            {/* <Route path='/appdesign/graphicdesign' element={<Graphicdesign />} /> */}
          </Routes>
        <Footer/>
      </BrowserRouter>
  </>
  )
}

export default App
