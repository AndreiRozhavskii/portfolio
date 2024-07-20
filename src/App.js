import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
