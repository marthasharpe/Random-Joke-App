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

function Header() {
  return (
    <div class="intro">
      <figure id="img-div">
          <img class="image" src="stanandspidey.png" alt="Stan Lee and Spidey" title="Stan Lee gives a thumbs-up while Spidey snaps a pic in the background." style="max-width: 486px"/>
        <figcaption id="img-caption">Stan Lee as the image of success.</figcaption>
      </figure>
  
      <div class="tribute-info">  
        <p>Stan Lee was the creator of iconic heroes and owner of a multi-billion dollar company. He married a model and they were together for nearly 70 years. He lived to be 95 and was still doing what he loved up till the end. What was his secret? Three simple things:
        
        1) Meet deadlines and pay the bills,
        2) like what you do and do what you like,
        3) and be open to getting Lucky!
        </p>
      </div>
    </div>  
  )
}

function App() {
  return (
    <div className="app-container" style={container}>
      <h1 class="title">Stan Lee's Secrets to Success</h1>
      <Header />
      <QuoteBox />
    </div>
  );
}

export default App;
