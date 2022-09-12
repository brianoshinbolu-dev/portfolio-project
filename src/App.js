import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/skills/Skills';



function App() {
  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Skills />
      <h1>App</h1>
    </div>
  );
}

export default App;
