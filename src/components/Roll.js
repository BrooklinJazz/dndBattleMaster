import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { bindActionCreators } from "redux";

class Roll extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {rolled, roll, result} = this.props
    return (
      <div>
        <div>{rolled} {roll} {result} <input type="number" defaultValue={result}></input> <button
          onClick={() => this.props.deleteRoll()}
          >Delete</button></div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of MonsterList
  // console.tron.log(state);
  const { rolls } = state.monsters;
  return {
    rolls
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectCombatant is called, the result should be passed to all
  // of our reducers
  return {
    deleteRoll: payload =>
      dispatch(actions.deleteRoll(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Roll);
