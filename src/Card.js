/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./Cards.css";
class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.floor(Math.random() * 60 - 30);
    let x = Math.floor(Math.random() * 40 - 20);
    let y = Math.floor(Math.random() * 40 - 20);
    this._transform = `translate(${x}px, ${y}px) rotate(${angle}deg) `;
  }
  render() {
    return (
      <img
        style={{ transform: this._transform }}
        className="Card"
        src={this.props.image}
        alt={this.props.name}
      />
    );
  }
}
export default Card;
