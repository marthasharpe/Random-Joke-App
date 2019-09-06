import React from 'react';
import QuoteBox from './QuoteBox';

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "darkred",
  height: 500
}

function App() {
  return (
    <div className="app-container" style={container}>
      <QuoteBox />
    </div>
  );
}

export default App;
