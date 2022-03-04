import React, { Component } from 'react'
import './Form.css'
import Info from './components/Info';
import Obs from './components/Obs';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      name: '',
      email: '',
      age: '',
      checkbox: 'false',
      obs: ''
    };
  }


  handleChange(event) {
    const { name } = event.target
    const value =  event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <label>
              Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =
                <textarea name="estadoFavorito"/>
            </label>
          </fieldset>

          <Info b={ this.state } handleChange={ this.handleChange }/>
          <Obs info={ this.state } handleChange={ this.handleChange }/>

          <label htmlFor="file">
            <input type="file" name="file" id="file" ref={this.fileInput}/>
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;