import React from 'react';
import TestPage from './pages/TestPage';

function App() {
  const [inputText, setText] = React.useState("");
  const handleChange = (e) => {
      setText(e.target.value);
  };
  
  return (
    <div>
      <TestPage handleChange={handleChange} inputText={inputText}></TestPage>
    </div>
  );
}

export default App;
