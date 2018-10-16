import React from 'react';
import {connect} from 'react-redux';
import './App.css';

const Counter = (props) => {
    return (
      <div className="App">
        <div className="main-div">
          <h1>Redux Practice Part Two</h1>
          <h2>Counter Redux App</h2>
          <h2>{props.count}</h2>
          <div className="buttons">
            <button onClick={props.onButtonClickAdd}>+</button>
            <button onClick={props.onButtonClickReset}>Reset</button>
            <button onClick={props.onButtonClickRemove}>-</button>
          </div>
        </div>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClickAdd: () => {
      const action = { type: 'INCREMENT'}
      dispatch(action);
    },
    onButtonClickRemove: () => {
      const action = { type: 'DECREMENT'}
      dispatch(action);
    },
    onButtonClickReset: () => {
      const action = { type: 'RESET'}
      dispatch(action);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
