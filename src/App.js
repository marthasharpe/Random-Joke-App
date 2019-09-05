import React from 'react';
import Quotes from './Quotes';

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
    </div>
  );
}

export default App;
