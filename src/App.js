import React from 'react';
import QuoteBox from './QuoteBox';
import Signature from './Signature';

const title = {
  color: "white",
  textAlign: "center",
  marginTop: "3rem"
}

function App() {
  return (
    <div className="App" style={{width: "100%", height: "100%"}}>
      <h1 style={title}>Welcome to .getJoke()</h1>
      <QuoteBox />
      <Signature />
    </div>
  );
}

export default App;
