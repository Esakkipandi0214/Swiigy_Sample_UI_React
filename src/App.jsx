import React from 'react'
import NavBar from './component/Home/navBar';
import SectionOne from './component/Home/sectionOne'
import SectionTwo from './component/Home/sectionTwo'
import SectionThree from './component/Home/sectionThree'
import SectionFour from './component/Home/sectionFour'
import SectionFive from './sectionFive'
import SectionSix from './component/Home/sectionSix'
import SectionSeven from './component/Home/sectionSeven'
import Footer from './component/Home/footer'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home/Front'
import About from './component/About/PageAbout'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App