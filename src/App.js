import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'; 
import Counters from './components/counters'; 
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handledelete = counterId => {
    // filter does =>> if c.id not equal to counterId then return the counter otherwise don't
    let counters = this.state.counters.filter(c => c.id !== counterId);

    this.setState({
      counters
    });
  };

  resetHandle = () => {
    let counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter; 
    })
    this.setState({
      counters,
    })
  }

  onClickIncrement = counter => {
    const counters = [...this.state.counters]; 
    const index = counters.indexOf(counter);
    console.log(index);
    
    counters[index].value += 1  // getting the counter by index
    this.setState({
      counters,
    });
  };

  render() {
    return (
         <React.Fragment>
            <Navbar 
            counters={this.state.counters}
            totalCounters={this.state.counters.filter((c)=> c.value > 0).length}
            />
            <main className="container">
              <Counters 
              counters={this.state.counters}
              resetHandle={this.resetHandle}
              onDelete={this.handledelete}
               onClickIncrement={this.onClickIncrement}
                />
            </main>
         </React.Fragment>
    );
  }
}

export default App;
