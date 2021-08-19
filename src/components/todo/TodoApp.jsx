import React , {Component} from 'react'

class TodoApp extends Component{
  render(){
    return(
      <div className="TodoApp">
          My Todo Application
          <LoginComponent/>
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
      console.log('Successful')
      this.setState({showSuccessMessage: true})
      this.setState({hasLoginFailed: false})
    }
    else{
      this.setState({hasLoginFailed: true})
      this.setState({showSuccessMessage: false})
    }
  }

  render(){
    return(
      <div> 
        {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
        {this.state.hasLoginFailed && <div> Invalid Credentials</div>}
        <ShowLoginSucessMessage showSuccessMessage={this.state.showSuccessMessage}/>
        User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        Password : <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={this.loginClicked}>Login</button>
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