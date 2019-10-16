import React, { Component } from 'react';

class App extends Component {
  state = {
    counter = 0;
  }

  increment = () => {
    let { counter } = this.state;
    counter += 1
    this.setState({
      counter;
    })
  }

  render() {

    let { counter } = this.state;
    return (
      <div>
        <h1>Testing Component</h1>
        <h4> Counter : { counter } </h4>
        <button  onclick={this.increment}>Increment</button> 
      </div>
    );
  }
}

export default App;