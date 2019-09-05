import React from 'react';
import Quotes from './Quotes';
import Buttons from './Buttons';

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "darkred",
  width: 600,
  height: 400
}

function App() {
  return (
    <div className="app-container" id="quote-box" style={container}>
      <Quotes />    
      <Buttons />
    </div>
  );
}

export default App;
