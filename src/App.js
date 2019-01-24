import React, { Component } from 'react';
/*import Counter from './comp1/Counter'
import SampleList from './comp1/SampleList'

//import RefEx from './comp2/RefEx'
import RefOuter from './comp2/RefOuter'*/


import TodoComponent from './comp3/TodoComponent'

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <RefEx></RefEx>
          <RefOuter></RefOuter>


        <SampleList></SampleList>
        <Counter amount={1}></Counter>
        <Counter amount={10}></Counter>
        <Counter amount={100}></Counter>
        <Counter amount={1000}></Counter>*/}


          <TodoComponent></TodoComponent>


      </div>
    );
  }
}

export default App;
