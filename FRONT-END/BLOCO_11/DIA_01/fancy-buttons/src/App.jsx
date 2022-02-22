import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);

    this.state = {
      numeroDeCliques: 0,
      clicksBtnTwo: 0
    }
  }

  handleClick() {
    console.log(this);
    console.log('Clicou no primeiro botão!');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  
  handleClickTwo() {
    console.log(this);
    console.log('Clicou no segundo botão!')
    this.setState((estadoAnterior, _props) => ({
      clicksBtnTwo: estadoAnterior.clicksBtnTwo + 1
    }))
  }

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numeroDeCliques, clicksBtnTwo } = this.state
    return (
      <div>
        <button 
        style={{backgroundColor: this.buttonColor(numeroDeCliques)}}
        onClick={this.handleClick}>Meu Primeiro botão {numeroDeCliques}
        </button>
        
        <button 
        style={{backgroundColor: this.buttonColor(clicksBtnTwo)}}
        onClick={this.handleClickTwo}>Meu Segundo Botão {clicksBtnTwo}   
        </button>
      </div>
    );
  }
}

export default App;