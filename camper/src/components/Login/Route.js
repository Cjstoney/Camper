import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Login from './LoginPage'



const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Login" component={Login} />
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))