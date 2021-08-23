import axios from 'axios'

class HelloWorldService{
  HelloWorldPathVariableService(name){
    return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    //console.log('executed service')
  }

}

export default new HelloWorldService()