import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import AutenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'

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
                      todo => <tr key={todo.id}>
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

export default ListTodosComponent;