import React, {Component} from "react";
import {Heading, Text} from "spectacle";
import BigNumber from "bignumber.js";

import {buttonStyles} from "./utilities";

const planets = require("json!../assets/swapi/planets.json");

export default class ReduceExample extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      totalPopulation: this.getTotalPopulation()
    })
  }

  getTotalPopulation() {
    return planets.reduce((total, planet) => {
      const bigNumToAdd = (planet.population && planet.population !== "unknown") ? new BigNumber(planet.population) : new BigNumber(0);
      return total.plus(bigNumToAdd);
    }, new BigNumber(0));
  }

  render() {
    const totalPopulation = this.state.totalPopulation ? (<Text textColor="tertiary">Total population of all the planets: { this.state.totalPopulation.toFormat()}</Text>) : null;
    return (
      <div>
        <button style={buttonStyles} onClick={this.handleClick}>Get Total Population</button>
        {totalPopulation}
      </div>
    )
  }
}