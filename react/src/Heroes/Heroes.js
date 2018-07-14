import React, { Component } from 'react';
import './Heroes.css';

import { INITIAL_HEROES } from '../mock-heroes';

export default class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      selectedIdx: null,
      heroes: INITIAL_HEROES,

      id: 1,
      name: 'Windstorm'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  onSelect(hero) {
    // console.log('asdfas')
    // console.log(hero)
    this.setState({ selectedIdx: hero.id });
  }
  render() {
    const selectedHero = this.state.heroes[this.state.selectedIdx]

    return (
      <div>
        <h2>My Heroes</h2>
        <ul class="heroes">
          {this.state.heroes.map(hero =>
            <li onClick={() => this.onSelect(hero)}>
              <span class="badge">{hero.id}</span> {hero.name}
            </li>
          )}
        </ul>
        {<div>
          <h2>{selectedHero.name.toUpperCase()} Details</h2>
          <div><span>id: </span>{selectedHero.id}</div>
          <div>
            <label>name:
              <input onChange={this.handleChange} value={selectedHero.name} placeholder={selectedHero.name} />
            </label>
          </div>
        </div>}
      </div>
    )
  }
}