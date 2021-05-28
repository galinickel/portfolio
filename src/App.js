import React from 'react'
import './assets/main.scss'
import "wired-elements";

import Header from './cmps/Header'
import About from './cmps/About'
import Projects from './cmps/Projects'

const App = ()=>{
    return (
      <div className="App ui container">
        <Header/>
        <wired-divider/>
        <Projects/>
        <wired-divider/>
        <About/>

      </div>
    );
  
  }

export default App;

