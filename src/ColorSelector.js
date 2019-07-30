import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  handleClick = (e) => {
    // the event listener for a click is activated we use target to reach the element clicked
    // using the target to enter into the clicked on element, find the
    // style it has and access the background color of the selected swatch
    // we create a variable will will pass on to the clicked method in Matrix
    const color = e.target.style.backgroundColor;
    this.props.clickedColor(color)
  }

  render() {
    return (
        // Added an onClick to wait for a click in the Swatches
      <div id="colorSelector" onClick={this.handleClick}>
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
