import React from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "tick",
      count: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        message: this.setMessage()
      });
      console.log(this.state.count);
    }, 1000);
  }

  setMessage = function() {
    if (this.state.count + 1 >= 8) {
      clearInterval(this.interval);
      return "BOOM!!!!";
    } else if ((this.state.count + 1) % 2 === 0) {
      return "tick";
    } else {
      return "tock";
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
