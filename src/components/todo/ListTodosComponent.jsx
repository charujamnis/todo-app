import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import AutenticationService from './AuthenticationService.js'
import TodoDataService from '../../api/todo/TodoDataService.js'


class ListTodosComponent extends Component{
  constructor(props){
    console.log('constructor')
    super(props)
    this.state={ //array of todos 
      todos : [
        // {id:1, description: 'Learn React', done: false, targetDate: new Date()},
        // {id:2, description: 'Learn Spring' , done: false, targetDate: new Date()},
        // {id:3, description: 'Learn Java' , done: false, targetDate: new Date()},
        // {id:4, description: 'Learn UML' , done: false, targetDate: new Date()},
        // {id:5, description: 'Learn JUnit' , done: false, targetDate: new Date()}
      ],
      message:null
    }

    this.deleteTodoClicked=this.deleteTodoClicked.bind(this)
    this.updateTodoClicked=this.updateTodoClicked.bind(this)
    this.refreshTodos=this.refreshTodos.bind(this)
    this.addTodoClicked=this.addTodoClicked.bind(this)
  }
  
  //Get all todos for the particular user after constructor/first render is called.
  componentDidMount(){
    console.log('componentDidMount')
    this.refreshTodos();
  
  }
  refreshTodos(){
    let username=AutenticationService.getLoggedInUser()
    TodoDataService.retrieveAllTodos(username)
    .then(
      response=>{
        this.setState({
          todos : response.data
        });
      }
    )
  }

  updateTodoClicked(id){
    //console.log('update '+id)
    this.props.history.push(`/todos/${id}`) //redirect to different route.
  }

  addTodoClicked(){
  
    //console.log('update '+id)
    this.props.history.push(`/todos/-1`) //redirect to different route.
  }
  deleteTodoClicked(id){
    let username=AutenticationService.getLoggedInUser()
    //console.log(id+" "+username)
    TodoDataService.deleteTodo(username,id)
    .then(response =>{
      this.setState({message:`Delete of todo ${id} successful`});
      this.refreshTodos();
    })
  }
  

  render(){
    console.log('render')
    return(
         <div>
            <h1>List Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}
            </div>}
            <div className="container">
              <table className="table">
                <thead>
                  <tr>
                    <th>description</th>
                    <th>target Date</th>
                    <th>is Completed?</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  { //use map function to get the list from an array.
                    this.state.todos.map(
                      todo => <tr key={todo.id}>
                      <td>{todo.description}</td>
                      <td>{todo.targetDate.toString()}</td>
                      <td>{todo.done.toString()}</td>
                      <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                      <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
              <div className="row"> 
                  <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
              </div>
              </div>
           </div>
    );
  }
}

export default ListTodosComponent;