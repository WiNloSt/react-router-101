import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Settings } from './components/Setting'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact render={() => <h1>This is main page</h1>} />
        <Route path="/settings/" component={Settings} />
      </div>
    )
  }
}

export default App
