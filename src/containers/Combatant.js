import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/index"

class Combatant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    // this._onButtonClick = this._onButtonClick.bind(this);
    // this.focusTextInput = this.focusTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {

    const {combatant = {}, index} = this.props;
    console.log("combatant >>>> ", combatant);

    return (
      <div
        onClick={() => {
          this.props.selectCombatant(combatant)
        }}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              this.handleSubmit(e)
            }
          }
          >
            <input type="text" name="hpChange"
              onChange={(e) => this.handleChange(e)}
            />
          </form>
          <p>{combatant.Name}</p>
          <p>Current: {combatant.currentHpchange}</p>
          <p>Max: {combatant.HP.Value}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.props.removeCombatant({combatant, index: index})
            }
          }>Delete</button>
        </div>
      )
    }
    handleSubmit(e) {
        const {combatant = {}, index} = this.props;
      e.preventDefault();
      console.log('hpChange', this.state.hpChange);
      this.props.changeCombatantHp({combatant, hpChange: this.state.hpChange, index: index})
      this.setState({showComponent: false});
    }
    handleChange(event) {
      const newState = Object.assign({}, this.state, {
        [event.target.name]: event.target.value
      });
      this.setState(newState)
    }
  }



  function mapStateToProps(state) {
    const {selectedMonster} = state.monsters;
    return {selectedMonster};
  }

  function mapDispatchToProps(dispatch) {
    // Whenever selectCombatant is called, the result should be passed to all
    // of our reducers
    return {
      selectCombatant: monster => dispatch(actions.selectCombatant(monster)),
      changeCombatantHp: monster => dispatch(actions.changeCombatantHp(monster)),
      removeCombatant: monster => dispatch(actions.removeCombatant(monster))
    };
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Combatant);
