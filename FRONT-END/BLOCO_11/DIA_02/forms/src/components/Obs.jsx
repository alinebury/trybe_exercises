import React from 'react';

class Obs extends React.Component {
  render() {
    const { checkbox, obs, handleChange } = this.props
    return (
      <fieldset>
            <label htmlFor="obs">
              Observações:
              <textarea name="obs" id="obs" cols="30" rows="10" value={obs} onChange={handleChange}/>
            </label>
            <label htmlFor="checkbox">
              Aceitar termos
              <input type="checkbox" name="checkbox" id="checkbox" value={checkbox} onChange={handleChange}/>
            </label>
      </fieldset>
    )
  }
}

export default Obs;