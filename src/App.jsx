import { useState } from 'react'
import "./app.css";
import Header from './components/Header'
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="bg-color">
        <Header />
        <FirstSection />
      </div>
      <div className="bg-color2">
        <SecondSection />
      </div>
      <div className="bg-color3">
        <ThirdSection />
      </div>
      <FourthSection />
      <div className="bg-color5">
        <Footer />
      </div>
    </>
  )
}

export default App
