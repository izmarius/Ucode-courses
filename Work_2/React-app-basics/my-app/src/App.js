import React from 'react';
import Ninjas from './components/ninjas';
import Form from './components/Form'
;
function App() {

  const state = {
    ninjas: [
      {name: "Rye", age: "25", belt: "black", id: 1},
      {name: "Yoshi", age: "28", belt: "green", id: 2},
      {name: "Mario", age: "30", belt: "pink", id: 3}
    ]
  }

  const addNinja = (ninja) => {
    ninja.id = Math.random();
    console.log(ninja);
  }

  return (
    <div className="App">
      <h1>My first React app</h1>
      {/* <Ninjas name="Rye" age="25" belt="black"/> */}

    <Ninjas ninjas={state.ninjas}/>
    <Form addNinja={addNinja}/>
    </div>
  );
}

export default App;
 