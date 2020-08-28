import React from 'react';
import Dice from "./components/dice.js";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>
          {" "}
          <span aria-label="two eighth-notes, tied, and colored in purple" role="img">🎵</span> Rhythm Shaker
        </h1>
      </header> */}
      <Dice />
    </div>
  );
}

export default App;
