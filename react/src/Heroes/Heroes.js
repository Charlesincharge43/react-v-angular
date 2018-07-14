import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Heroes.css';

import HeroDetail from '../HeroDetail/HeroDetail';
import { setSelected, getAndLoadHeroes, updateHero } from '../redux/heroes';


class Heroes extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.props.getAndLoadHeroes();
  }
  handleChange(e) {
    const newName = e.target.value;
    const selectedIdx = this.props.heroes.selectedIdx;
    this.props.updateHero(selectedIdx, {name: newName})
  }
  onSelect(idx) {
    this.props.setSelected(idx);
  }
  render() {
    const selectedIdx = this.props.heroes.selectedIdx;
    const heroesList = this.props.heroes.list;
    const selectedHero = heroesList[selectedIdx];
    
    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {heroesList.map((hero, idx) =>
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

const mapStateToProps = ({ heroes }) => ({ heroes });
const mapDispatchToProps = { setSelected, getAndLoadHeroes, updateHero };

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);