import React, { useContext } from 'react';
import Context from './context/Context';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

const Cars = () => {
  const { cars, moveCar } = useContext(Context);
  const { red, blue, yellow } = cars;

  return(
    <div>
      <div>
        <img
          className={ red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar('red', !red)}
          type="button"
        >
          Move
      </button>
      </div>
      <div>
        <img
          className={blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => moveCar('blue', !blue)}
          type="button"
        >
          Move
      </button>
      </div>
      <div>
        <img
          className={yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar('yellow', !yellow)}
          type="button"
        >
          Move
      </button>
      </div>
    </div>
  );
}

export default Cars;
