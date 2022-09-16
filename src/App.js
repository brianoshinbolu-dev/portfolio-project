import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';
import ContactMe from './components/contactme/ContactMe';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
