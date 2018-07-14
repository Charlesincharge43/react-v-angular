import React, { Component } from 'react';

export default class Heroes extends Component {
  constructor(){
    super()
    this.state = {
      id: 1,
      name: 'Windstorm'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({name: e.target.value})
  }
  render() {
    return (
      <div>
        <h2>{this.state.name.toUpperCase()} Details</h2>
        <div><span>id: </span>{ this.state.id }</div>
        <div>
          <label>name:
            <input onChange={this.handleChange} value={this.state.name} placeholder={this.state.name} />
          </label>
        </div>
      </div>
    )
  }
}