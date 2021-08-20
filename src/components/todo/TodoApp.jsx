import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
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
                <Route path="/welcome/:name" component={WelcomeComponent}/>
                <Route path="/todos" component={ListTodosComponent}/>
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

class ListTodosComponent extends Component{
  constructor(props){
    super(props)
    this.state={ //array of todos 
      todos : [
        {id:1, description: 'Learn React', done: false, targetDate: new Date()},
        {id:2, description: 'Learn Spring' , done: false, targetDate: new Date()},
        {id:3, description: 'Learn Java' , done: false, targetDate: new Date()},
        {id:4, description: 'Learn UML' , done: false, targetDate: new Date()},
        {id:5, description: 'Learn JUnit' , done: false, targetDate: new Date()}
      ]
    }
  }
  render(){
    return(
         <div>
            <h1>List Todos</h1>
            <div className="container">
              <table className="table">
                <thead>
                  <tr>
                    <th>description</th>
                    <th>target Date</th>
                    <th>is Completed?</th>
                  </tr>
                </thead>

                <tbody>
                  { //use map function to get the list from an array.
                    this.state.todos.map(
                      todo => <tr>
                      <td>{todo.description}</td>
                      <td>{todo.targetDate.toString()}</td>
                      <td>{todo.done.toString()}</td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
              </div>
           </div>
    );
  }
}

class WelcomeComponent extends Component{
  render(){
    return(
      <>
      <h1>Welcome</h1>
      <div className="container">Welcome {this.props.match.params.name}. You can manage your Todos <Link to="/todos"> here </Link> </div>
      </>
    );
  }
}

class LogoutComponent extends Component{
  render(){
    return(
      <div><h1>You are logged out.</h1>
        <div className="container">
            Thank you for using our Application.
        </div>
      </div>
    )
  }
}

class LoginComponent extends Component{
  constructor(props){
      super(props)
      this.state={
        username : 'admin',
        password : '',
        hasLoginFailed: false,
        showSuccessMessage : false
      }

      this.handleChange=this.handleChange.bind(this);
      this.loginClicked=this.loginClicked.bind(this);
      
      //this.handlePasswordChange=this.handlePasswordChange.bind(this);
  }

  handleChange(event){
    //console.log(event.target.value)
    //console.log(this.state)
    this.setState(
      { 
        [event.target.name]:event.target.value
      }
    )
  }

 /* handlePasswordChange(event){
    //console.log(event.target.value)
    this.setState({password:event.target.value})
  }*/

  loginClicked(){
    if(this.state.username==='admin' && this.state.password==='admin123')
    {
      //It uses history api to navigate on welcome page.
      this.props.history.push(`/welcome/${this.state.username}`)
     // console.log('Successful')
     // this.setState({showSuccessMessage: true})
     // this.setState({hasLoginFailed: false})
    }
    else{
      this.setState({hasLoginFailed: true})
      this.setState({showSuccessMessage: false})
    }
  }

  render(){
    return(
      <div> 
          <h1>Login</h1>
          <div className="container">
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
            {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}
            <ShowLoginSucessMessage showSuccessMessage={this.state.showSuccessMessage}/>
            User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password : <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
      </div>
    )
  }
}

class HeaderComponent extends Component{
  render(){
    return(
        <header>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="https://www.dtcc.edu/" className="navbar-brand">DTCC</a></div>
            <ul className="navbar-nav">
              <li ><Link className="nav-link" to="/welcome/admin">Home</Link></li>
              <li ><Link className="nav-link" to="/todos">Todos</Link></li>
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              <li><Link className="nav-link" to="/login">Login</Link></li>
              <li><Link className="nav-link" to="/logout">Logout</Link></li>
            </ul>
        </nav>
        </header>
    
    )
  }
}


class FooterComponent extends Component{
  render(){
    return(
      <footer className="footer">
        <span className="text-muted">All Rights are reserved 2021 @dtcc</span>
      </footer>
    )
  }
}

function ErrorComponent(){
  return <div>An Error Occured. Contact Support.</div>
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