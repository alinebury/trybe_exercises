import React from 'react';
import redSignal from './images/redSignal.jpeg'
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal as changeSignalAction } from './actions';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

const TrafficSignal = ({ signalColor, changeSignal }) => {
  return (
    <div>
      <div className="button-container">
        <button type="button" onClick={ () => changeSignal('red')}>Red</button>
        <button type="button" onClick={ () => changeSignal('yellow')}>Yellow</button>
        <button type="button" onClick={ () => changeSignal('green')}>Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" width={'300px'}/>
    </div>
  );
}

const mapStateToProps = (state) => ({ signalColor: state.color });
const mapDispatchToProps = (dispatch) => ({
  changeSignal: (payload) => dispatch(changeSignalAction(payload)),
});

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired, 
}

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
