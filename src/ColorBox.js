import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

<<<<<<< HEAD
  render() {
    if(this.props.opacity >= 0.2) {
=======
  render() {if(this.props.opacity >= 0.2) {
>>>>>>> 4527e5e2e6ad929a153c6978eab8d3476c647909
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      return null
    }
  }
}