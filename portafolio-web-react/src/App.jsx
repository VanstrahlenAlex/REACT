import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portafolio from './components/portafolio/Portafolio';
// import Testimoniales from './components/testimoniales/Testimoniales';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


export const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portafolio />
      {/* <Testimoniales /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
