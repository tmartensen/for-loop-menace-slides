import React, {Component} from "react";
import {Heading, Text} from "spectacle";
import {getById, buttonStyles} from "./utilities";

const people = require("json!../assets/swapi/people.json");
const species = require("json!../assets/swapi/species.json");
const films = require("json!../assets/swapi/films.json");

export default class MapExample extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      mappedDroids: this.mapDroidsFilms(this.filterDroids()),
    })
  }

  filterDroids() {
    return people.filter(person => {
      const speciesUrl = person.species[0];
      return (speciesUrl !== undefined && getById(speciesUrl) === "2");
    });
  }

  mapDroidsFilms(droids) {
    return droids.map(droid => {
      const droidsFilms = droid.films.map(filmUrl => films.filter(film => film.url === filmUrl)[0].title);
      return {droidName: droid.name, films: droidsFilms};
    });
  }

  render() {
    console.log(JSON.stringify(this.state.mappedDroids, null, 2));
    const mappedDroids = this.state.mappedDroids || [];

    return (
      <div style={{paddingBottom: "10px"}}>
        <button style={buttonStyles} onClick={this.handleClick}>Filter and Map Droids</button>
        <div style={{marginTop: "20px"}}>
          {mappedDroids.map(droid => (
            <div>{droid.droidName} : {droid.films.join(", ")}</div>
        ))}
        </div>
      </div>
    )
  }
}