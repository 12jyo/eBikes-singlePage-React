import React from 'react';
import NavHome from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import "./components/style.css"


const App = () => {
  return (
    <>
      <NavHome />
      <Home />
      <About />
      <Contact />
    </>
  )
}

export default App;