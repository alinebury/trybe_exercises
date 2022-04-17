import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [cars, setCars] = useState({ 
    red: false,
    blue: false,
    yellow: false,
  });

  const [signal, setColor] = useState({
    color: 'red',
  })

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const changeSignal = (signal) => {
    setColor({
      color: signal,
    })
  };
  
  const context = { cars, moveCar, signal, changeSignal };

  return(
    <Context.Provider value={ context }>
        { children }
    </Context.Provider>
  );
}

export default Provider;
