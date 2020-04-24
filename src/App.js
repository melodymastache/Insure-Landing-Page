import React from 'react';
import './App.css';
/* components */
import Header from './components/Header';
import Intro from './components/Intro';
import AtAGlance from './components/AtAGlance';
import HowWeWork from './components/HowWeWork';
import Footer from './components/Footer';
import Attribution from './components/Attribution';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <AtAGlance />
      <HowWeWork />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
