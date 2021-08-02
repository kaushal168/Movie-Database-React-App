import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Pages/Home"
import Movie from "./Pages/MoviePage"
import Navbar from "./Pages/Navbar"
import About from "./Pages/About"
import Error from "./Pages/Error"
import "./index.css"

function App() {
  document.title = `MovieDB - Movie Database`
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/movies/:id'>
          <Movie />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App