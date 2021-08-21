import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import AutenticationService from './AuthenticationService.js'


class FooterComponent extends Component{
  render(){
    return(
      <footer className="footer">
        <span className="text-muted">All Rights are reserved 2021 @dtcc</span>
      </footer>
    )
  }
}

export default FooterComponent