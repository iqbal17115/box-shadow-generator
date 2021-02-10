import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [horizontalValue, setHorizontalValue] = useState(5);
  const [verticleValue, setVerticleValue] = useState(5);
  const [blurValue, setBlurValue] = useState(5);
  const [colorValue, setColorValue] = useState("black");
  const [checkValue, setCheckValue] = useState(false);

  return (
    <div className="App">
      
      <div className="controlColor">
        
        <label>Horizontal Value</label>
        <input type="range" min="-200" max="200" value={ horizontalValue } onChange={(event)=>setHorizontalValue(event.target.value)}/>

        <label>Verticle Value</label>
        <input type="range" min="-200" max="200" value={ verticleValue } onChange={(event)=>setVerticleValue(event.target.value)}/>

        <label>Blur</label>
        <input type="range" min="0" max="200" value={ blurValue } onChange={(event)=>setBlurValue(event.target.value)}/>
        
        <label>Color</label>
        <input type="color" value={ colorValue } onChange={(event)=>setColorValue(event.target.value)}/>
        
        <div className="switch">
    <label>
      Outline
      <input type="checkbox" checked={ checkValue } onChange={()=>setCheckValue(!checkValue)}/>
      <span className="lever"></span>
      Inset
    </label>
     </div>

      </div>
      <div className="box-shadow">

          <div className="box" style={{ boxShadow: `${checkValue? "inset" : ""} ${horizontalValue}px ${verticleValue}px ${blurValue}px ${colorValue}` }}>
            <p>box-shadow: {horizontalValue}px {verticleValue}px {blurValue}px {colorValue}</p>
          </div>

      </div>
      
    </div>
  );
}

export default App;
