import React, { useState } from 'react';

function ColorBoxFeature(props) {
  const arrayColor = ['deeppink', 'orange', 'blue', 'yellow', 'green', 'purple', 'black'];
  const [colorBox, setColorBox] = useState(() => {
    if (localStorage.getItem('color')) {
      return localStorage.getItem('color');
    }
    return arrayColor[0];
  });
  const handlerColorBoxClick = () => {
    // get index of array color
    const index = Math.floor(Math.random() * arrayColor.length);
    setColorBox(arrayColor[index]);
    localStorage.setItem('color', arrayColor[index]);
  }
  return (
    <div style={{backgroundColor: colorBox, height: '50px', width: '50px', cursor: 'pointer'}} onClick={handlerColorBoxClick}>
      
    </div>
  );
}

export default ColorBoxFeature;