import React from 'react';
import QuoteBox from './QuoteBox';

function App() {
  return (
    <div className="App" style={{width: "100%", height: "100%"}}>
      <h1 style={{color: "white", textAlign: "center", marginTop: "3rem"}}>Welcome to .getJoke()</h1>
      <QuoteBox />
    </div>
  );
}

export default App;
