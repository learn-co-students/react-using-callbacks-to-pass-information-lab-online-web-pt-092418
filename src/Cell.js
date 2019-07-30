import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () =>{
    // once we get the info of the selected color from
    // the passColor prop we change the state of the color
    // in the cell
    const newColor = this.props.passColor;
    this.setState({
      color: newColor
    })
  };
  
  render() {
    return (
        // we add an event listener that will wait for a click
        // on the page and execute the code to activate the color selector
      <div className="cell" style={{backgroundColor: this.state.color}}
      onClick={this.handleClick}>
      </div>
    )
  }
  
}
