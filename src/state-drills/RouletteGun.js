import React from "react";

export default class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "you're safe until you pull the trigger",
      chamber: null,
      spinningTheChamber: false
    };
  }

  onClickHandler = () => {
    this.setState(
      {
        spinningTheChamber: true
      },
      this.resolveMessage()
    );
    this.timeout = setTimeout(() => {
      let randomNumber = Math.ceil(Math.random() * 8);

      this.setState(
        {
          chamber: randomNumber,
          spinningTheChamber: false
        },
        this.resolveMessage()
      );
    }, 2000);
  };

  resolveMessage = function() {
    if (!this.state.spinningTheChamber) {
      this.setState({
        message: "spinning the chamber and pulling the trigger! ...."
      });
    } else if (this.props.bulletInChamber === this.state.chamber) {
      this.setState({
        message: "BANG!!!"
      });
    } else {
      this.setState({
        message: "You're Safe"
      });
    }
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.onClickHandler}>Pull the trigger</button>
      </div>
    );
  }
}

// Alternative solution/Logic in Render //

/* {this.state.spinningTheChamber && (
          <p>spinning the chamber and pulling the trigger! ....</p>
        )}

        {this.state.chamber === this.props.bulletInChamber && <p>BANG!!!!</p>}

        {this.state.chamber !== this.props.bulletInChamber &&
          !this.state.spinningTheChamber && <p>You're Safe</p>} */
