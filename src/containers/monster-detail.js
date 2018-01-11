import React, {Component} from "react";
import {connect} from "react-redux";

class MonsterDetail extends Component {
  render() {
    if (!this.props.monster) {
      return <div>Select a monster to get started</div>;
    }

    return (<div>
      <h3>Details for:</h3>
      <div>Name: {this.props.monster.Name}</div>
      <div>Source: {this.props.monster.Source}</div>
      <div>Type: {this.props.monster.Type}</div>
      <div>Hp: {this.props.monster.HP.Value}
        {this.props.monster.HP.Notes}</div>
      <div>AC: {this.props.monster.AC.Value}
        {this.props.monster.AC.Notes}</div>
      <div>Speed: {this.props.monster.Speed}</div>
      <hr/>
    </div>);
  }
}

function mapStateToProps(state) {
  const {selectedMonster: monster} = state.monsters;
  return {monster};
}

export default connect(mapStateToProps)(MonsterDetail);
