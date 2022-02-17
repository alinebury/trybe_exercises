import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const numbers = [1, 2, 3, 4, 5, 6];

class App extends React.Component {
  render() {
    return (
      <ul>{numbers.map((number) => Task(number)) }</ul>
    );
  }
}

export default App;
