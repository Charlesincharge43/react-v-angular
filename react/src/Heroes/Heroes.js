import React, { Component } from 'react';
import './Heroes.css';

import { HEROES } from '../mock-heroes';
import HeroDetail from '../HeroDetail/HeroDetail';


export default class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      selectedIdx: null,
      heroes: HEROES
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const newName = e.target.value;
    const selectedIdx = this.state.selectedIdx;
    this.setState({
      heroes: this.state.heroes.map((hero, idx) => {
        return selectedIdx === idx ?
          Object.assign({}, hero, { name: newName }) :
          hero
      })
    });
  }
  onSelect(idx) {
    this.setState({ selectedIdx: idx });
  }
  render() {
    const selectedIdx = this.state.selectedIdx;
    const selectedHero = this.state.heroes[selectedIdx];

    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {this.state.heroes.map((hero, idx) =>
            <li key={idx}
            onClick={() => this.onSelect(idx)}
            className={ idx === selectedIdx ? "selected" : undefined }>
              <span className="badge">{hero.id}</span> {hero.name}
            </li>
          )}
        </ul>

        <HeroDetail hero={selectedHero} handleChange={this.handleChange} />
      </div>)
  }
}