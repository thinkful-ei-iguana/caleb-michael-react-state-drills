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
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        message: setMessage()
      });
    }, 1000)
  }

  setMessage = function() {
    if (this.state.count + 1 >= 8) {
      return 'BOOM!!!!'
    } 
    else if(this.state.count + 1 % 2 === 0) {
      return 'tick';
    } 
    else {
      return 'tock'
    }
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    )
  }
}