import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "./Homepage"
import Contact from "./Contact"
import Payment_USA from "./Payment_USA"
import Payment_INR from "./Payment_INR"

function CustomRouter() {
  return (
        <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/contact" component={Contact} />
              <Route path="/pay-us" component={Payment_USA} />
              <Route path="/pay-in" component={Payment_INR} />
            </Switch>
        </Router>
  )
}

export default CustomRouter
