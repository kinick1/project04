import React, { useContext } from 'react';
import { ColorContext } from '../example/Ex10';

const Ex10_ColorResult = () => {
  const Colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  const data = useContext(ColorContext);

  const handleColorClick = (color) => {
    data.setColor(color); 
  };

  return (
    <div>
      {Colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: '100px',
            height: '100px',
            display: 'inline-block',
            backgroundColor: color,
          }}
          onClick={() => handleColorClick(color)} 
        ></div>
      ))}
    </div>
  );
};

export default Ex10_ColorResult;