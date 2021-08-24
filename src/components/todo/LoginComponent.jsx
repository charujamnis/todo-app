import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import AutenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'
import TodoApp from './TodoApp'

class LoginComponent extends Component{
  constructor(props){
      super(props)
      this.state={
        username : 'user',
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
    // if(this.state.username==='admin' && this.state.password==='admin123')
    // {
    //   AutenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
    //   //It uses history api to navigate on welcome page.
    //   this.props.history.push(`/welcome/${this.state.username}`)
    //  // console.log('Successful')
    //  // this.setState({showSuccessMessage: true})
    //  // this.setState({hasLoginFailed: false})
    // }
    // else{
    //   this.setState({hasLoginFailed: true})
    //   this.setState({showSuccessMessage: false})
    // }

    AutenticationService
    .executeBasicAutenticationService(this.state.username,this.state.password)
    .then(()=>{
      console.log("success authetication method")
      AutenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
      this.props.history.push(`/welcome/${this.state.username}`)
    }).catch(()=>{
      console.log("catch error")
      this.setState({hasLoginFailed: true})
      this.setState({showSuccessMessage: false})
    })
  }

  render(){
    return(
      <div> 
          <h1>Login</h1>
          <div className="container">
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
            {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}
            {/*<ShowLoginSucessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
            User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password : <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
      </div>
    )
  }
 }

export default LoginComponent;
