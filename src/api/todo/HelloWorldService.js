import axios from 'axios'

class HelloWorldService{
  HelloWorldPathVariableService(name){
    //Basic Authentication approach
   // let username='user'
    //let password ='password'

    //let basicAuthHeader='Basic '+window.btoa(username+":"+password)  //after Basic give one space and append username and password. 
    return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
    //console.log('executed service')
  }

}

export default new HelloWorldService()