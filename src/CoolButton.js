import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    // const {className} = this.props;
    // const isSmall = this.props.isSmall;
    // const isDanger = this.propos.isDanger;

    return (
        <div>
      <button className={`${this.props.isSmall && "is-large" } ${this.props.isDanger && "is-danger" }`} >Button 1</button>
      <button className={`button ${this.props.isDanger && "is-danger" }`} >Button 1</button>
      </div>
    )
  }
}

export default CoolButton;