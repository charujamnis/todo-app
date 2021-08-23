import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component{
  constructor(props){
    super(props)

    this.state={
        welcomeMessage : '',
        errorMessage : ''
    }

    this.retrieWelcomeMessage=this.retrieWelcomeMessage.bind(this)
    this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
    this.handleError=this.handleError.bind(this)
  }
  render(){
    return(
      <>
      <h1>Welcome</h1>
      <div className="container">
        <span className="errorMessage">{this.state.errorMessage} </span>
      </div>

      <div className="container">Welcome {this.props.match.params.name}. You can manage your Todos <Link to="/todos"> here </Link> </div>

      <div className="container">Click here to get customized message 
      <button onClick={this.retrieWelcomeMessage} className="btn btn-success">Get Welcome Message</button> 
      </div>

      <div className="container">
        {this.state.welcomeMessage}
      </div>
      </>
    );
  }

  retrieWelcomeMessage(){
    //HelloWorldService.executeHelloWorldService()
    HelloWorldService.HelloWorldPathVariableService(this.props.match.params.name)
    .then(response =>this.handleSuccessfulResponse(response))
    .catch(error => this.handleError(error))
  }

  handleSuccessfulResponse(response){
    this.setState({welcomeMessage : response.data.message})
  }

  handleError(error){
    //  console.log(error.response);
    this.setState({errorMessage : error.response.data.message})
  }
}
export default WelcomeComponent