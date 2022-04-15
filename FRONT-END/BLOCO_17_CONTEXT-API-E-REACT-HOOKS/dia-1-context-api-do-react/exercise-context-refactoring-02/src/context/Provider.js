import React from 'react';
import Context from './Context';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { 
        color: 'red', 
      },
    }
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    })
  }

  changeSignal = (signal) => {
    this.setState({
      signal: { 
        ...this.state.signal,
        color: signal 
      }
    })
  }

  render() {
    const { children } = this.props
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    return (
      <Context.Provider value={ context }>
        { children }
      </Context.Provider>
    );
  }
}

export default Provider;
