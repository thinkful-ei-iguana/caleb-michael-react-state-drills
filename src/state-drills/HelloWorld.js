import React from "react";

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "World"
    };
  }

  onClickHandler = e => {
    console.log(e.target.value);
    this.setState({
      who: e.target.value
    });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.onClickHandler} value="Friend">
          Friend
        </button>
        <button onClick={this.onClickHandler} value="React">
          React
        </button>
        <button onClick={this.onClickHandler} value="World">
          World
        </button>
      </div>
    );
  }
}
