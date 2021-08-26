import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "./Homepage"
import Contact from "./Contact"

function CustomRouter() {
  return (
        <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
  )
}

export default CustomRouter
