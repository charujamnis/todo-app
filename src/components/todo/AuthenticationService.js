import axios from 'axios'

class AutenticationService{
  createBasicAuthToken(username,password){
    return 'Basic '+window.btoa(username+":"+password) 
  }
  executeBasicAutenticationService(username,password)
  {
    //http://localhost:8080/users/${name}/todos/${id}
    //let basicAuthHeader='Basic '+window.btoa(username+":"+password) 
    return axios.get('http://localhost:8080/basicauth',{
      headers:{
        authorization : this.createBasicAuthToken(username,password)
      }
    });
  }
  registerSuccessfulLogin(username,password){
      //Basic Authentication approach
     // let username='user'
     // let password ='password'
     // let basicAuthHeader='Basic '+window.btoa(username+":"+password)  //after Basic give one space and append username and password. 
    sessionStorage.setItem('authenticatedUser',username)
    //once user logged in then call setupAxiosInterceptor
    this.setupAxiosInterceptor(this.createBasicAuthToken(username,password))
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')

    if(user===null) return false
    return true
  }
  getLoggedInUser(){
    let user = sessionStorage.getItem('authenticatedUser')
    if(user===null) return ''
    return user;
  }
  setupAxiosInterceptor(basicAuthHeader){
      axios.interceptors.request.use(
        (config) => {
          if(this.isUserLoggedIn())
                config.headers.authorization = basicAuthHeader
          return config
          }
        )
    }
  }

export default new AutenticationService()