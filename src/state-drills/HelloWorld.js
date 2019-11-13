import React from "react";

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "World"
    };
  }

  onClickHandler = e => {
    this.setState({
      who: e.target.value
    });
  };

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.onClickHandler}>Friend</button>
        <button onClick={this.onClickHandler}>React</button>
        <button onClick={this.onClickHandler}>World</button>
      </div>
    );
  }
}
