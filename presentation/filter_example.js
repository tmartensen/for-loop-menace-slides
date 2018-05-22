import React, {Component} from "react";
import {Heading, Text} from "spectacle";
import {buttonStyles} from "./utilities";

const people = require("json!../assets/swapi/people.json");
const starships = require("json!../assets/swapi/starships.json");

export default class FilterExample extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      fastShips: this.filterFastShips()
    })
  }

  filterFastShips() {
    return starships.filter(ship => ship.MGLT !== "unknown" && ship.MGLT >= 75);
  }

  render() {
    const fastShips = this.state.fastShips ? this.state.fastShips.map(ship => (
      <Text textColor="tertiary">{ship.name}</Text>)) : null;
    return (
      <div style={{paddingBottom: "10px"}}>
        <button style={buttonStyles} onClick={this.handleClick}>Filter Fast Ships</button>
        {fastShips}
      </div>
    )
  }
}