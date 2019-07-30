import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedColor: '#fff'
    }
  }

  clickedColor = (color) => {
    // here we change the state of the color to the selected one from UI
    this.setState({
      selectedColor: color
    })
  };

  genRow = (vals) => (
      // adding the passColor we create a prop that enables access
      // to the current state of the clicked or selected color
    vals.map((val, idx) => <Cell key={idx} color={val} passColor={this.state.selectedColor}/>)
  );

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  );


  render() {
    return (
      <div id="app">
        <ColorSelector clickedColor={this.clickedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
