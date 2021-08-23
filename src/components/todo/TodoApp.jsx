import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AuthenticatedRoute from './AuthenticatedRoute'
import ListTodosComponent from './ListTodosComponent'
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from './TodoComponent'

class TodoApp extends Component{
  render(){
    return(
      <div className="TodoApp">
          <Router>
            <> {/*React Fragment*/}
            <HeaderComponent/>
              <Switch> {/*Switch is used when you want to show only one route at one time */}
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                <Route path="/logout" component={LogoutComponent}/>
              
                <Route component={ErrorComponent}/>
                  
              </Switch>
              <FooterComponent/>
            </>
          </Router>
          {/*<LoginComponent/>
          <WelcomeComponent/>*/}
      </div>
    )
  }
}




function ShowInvalidCredentials(props){
  if(props.hasLoginFailed){
    return <div> Invalid Credentials</div>
  }
  return null
}

function ShowLoginSucessMessage(props){
  if(props.showSuccessMessage){
    return <div>  Login successful </div>
  }
  return null
}

export default TodoApp;