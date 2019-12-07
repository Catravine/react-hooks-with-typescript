import React from 'react';
import './App.css';
import MyComp from './components/MyComp'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyComp name="Caroline" gender={"F"} flexibleField={null} whatever={666}></MyComp>
      </header>
    </div>
  );
}

export default App;
