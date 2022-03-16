import React, { Component } from 'react';

class About extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>About</h2>
        <p> My awesome About component </p>
      </div>
    );
  }
}

export default About;