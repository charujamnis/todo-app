import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import AutenticationService from './AuthenticationService.js'

class HeaderComponent extends Component{
  render(){
    const isUserLoggedIn=AutenticationService.isUserLoggedIn()
    return(
        <header>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="https://www.dtcc.edu/" className="navbar-brand">DTCC</a></div>
            <ul className="navbar-nav">
              { isUserLoggedIn && <li><Link className="nav-link" to="/welcome/admin">Home</Link></li>}
              {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              <li><Link className="nav-link" to="/login">Login</Link></li>
              {isUserLoggedIn && <li><Link  className="nav-link" to="/logout" onClick={AutenticationService.logout}>Logout</Link></li>}
            </ul>
        </nav>
        </header>
    )
  }
}

export default HeaderComponent