import React from 'react';

class Info extends React.Component {
  render() {
    const { name, email, age, handleChange } = this.props
    return (
      <fieldset>
            <label htmlFor="name">
              Nome: 
              <input id='name' name='name' type='text'value={name} onChange={handleChange}/>
            </label>
            <label htmlFor="email">
              Email:
              <input type="email" id='email' name='email' value={email} onChange={handleChange}/>
            </label>
            <label htmlFor="age">
              Idade:
              <select name="age" id="age" value={age} onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="adult">Maior que 18 anos</option>
                <option value="underage">Menor que 18 anos</option>
              </select>
            </label>
      </fieldset>
    )
  }
}

export default Info;
