import React from 'react'
import './assets/main.scss'
import "wired-elements";
import { HashRouter, Route,Link } from 'react-router-dom'

import Projects from './views/Projects'
import Homepage from './views/Homepage'

const App = () => {
  return (
    <HashRouter>
      <div className="App ui container">
      <section className="menu-bar">
            <wired-listbox horizontal>
                <Link to='/'><wired-item>Home</wired-item></Link>
                <Link to='/'><wired-item>About</wired-item></Link>
                <Link to='/portfolio'><wired-item>Projects</wired-item></Link>
            </wired-listbox>
        </section>
        <Route path="/portfolio" component={Projects} />
        <Route path="/" exact component={Homepage} />
      </div>
    </HashRouter>
  );

}

export default App;

