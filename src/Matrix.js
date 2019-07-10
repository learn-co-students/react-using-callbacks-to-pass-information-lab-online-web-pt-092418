import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell onGetColor={() => this.getColor()} key={idx} color={val} />)
  )

  getColor() {
    return this.state.color;
  }

  setColor(color) {
    console.log("setting color " + color);
    this.setState({ color });
  }

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector onSetColor={(color) => this.setColor(color)}/>
        
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
