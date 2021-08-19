import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{
  constructor(){
    super();
    this.state={
      counter : 0
    }
    this.increment=this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
    <div className="Counter">
    <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
    <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
    <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
      
    <span className="count">{this.state.counter}</span>

    <div><button className="reset" onClick={this.reset}>Reset</button></div>
    </div>
    );
  }
 increment(by){ //update state
   //console.log(`increment from Parent - ${by}`);
    this.setState({
      counter: this.state.counter + by
    });
  }

  decrement(by){ //update state
    //console.log(`increment from Parent - ${by}`);
     this.setState({
       counter: this.state.counter - by
     });
   }

   reset(){
    this.setState({
      counter: 0
    });
   }
 //arrow function
 /* increment(by){ //update state
    //console.log(`increment from Parent - ${by}`);
     this.setState(
       (prevState) => {
       return {counter: prevState.counter + by}
      }
     );
   }*/

}

export class CounterButton extends Component{
  //Define initial state in the constructor
  constructor(){
    super();   //always call super()
    this.state={
      counter : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render(){
    return(
      <div className="CounterButton">
          <button onClick={this.increment}>+{this.props.by}</button>
          <button onClick={this.decrement}>-{this.props.by}</button>
          {/*<span className="count">{this.state.counter}</span>*/}
      </div>
    );
  }

  increment(){ //update state
    this.setState({
      counter: this.state.counter +this.props.by
    });
    this.props.incrementMethod(this.props.by); 
  } 

  decrement(){
    this.setState({
      counter: this.state.counter - this.props.by
    });

    this.props.decrementMethod(this.props.by); 
  }
}

CounterButton.defaultProps = {
  by : 1
}

CounterButton.propTypes={
  by : PropTypes.number
}
export default Counter;