import React, { useEffect } from 'react'
import { MenuProvider } from './components/MenuContext'
import Header from './components/Header'
import Banner from './components/Banner'
import Things from './components/Things'
import Experience from './components/Experience'
import Works from './components/Works'
import Footer from './components/Footer'
import MobileOverlay from './components/MobileOverlay'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <MenuProvider>
      <div className="App">
        <MobileOverlay />
        <Header />
        <Banner />
        <Things />
        <Experience />
        <Works />
        <Footer />
      </div>
    </MenuProvider>
  )
}

export default App 