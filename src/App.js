import React from 'react'
import './assets/main.scss'
import "wired-elements";
import { HashRouter, Route } from 'react-router-dom'

import Homepage from './views/Homepage'

const App = () => {
  return (
    <HashRouter>
      <div className="App ui container">
      {/* <section className="menu-bar">
            <wired-listbox horizontal>
                <Link to='/'><wired-item>Home</wired-item></Link>
                <Link to='/'><wired-item>About</wired-item></Link>
                <Link to='/portfolio'><wired-item>Projects</wired-item></Link>
            </wired-listbox>
        </section> */}
        <Route path="/" exact component={Homepage} />
      </div>
    </HashRouter>
  );

}

export default App;

