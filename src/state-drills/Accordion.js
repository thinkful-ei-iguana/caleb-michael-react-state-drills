import React from "react";

export default class Accordion extends React.Component {
  static defaultProps = {
    sections: [{ title: "Default Title", content: "Default Content" }]
  };

  constructor(props) {
    super(props);

    this.state = {
      lastButton: null
    };
  }

  onClickHandler = e => {
    this.setState({
      lastButton: e.target.value
    });
  };

  render() {
    return (
      <ul>
        {this.props.sections.map((section, index) => {
          return (
            <li key={index}>
              <button type="button" onClick={this.onClickHandler} value={index}>
                {section.title}
              </button>
              {this.state.lastButton === `${index}` && <p>{section.content}</p>}
            </li>
          );
        })}
      </ul>
    );
  }
}

//

// return (
//   <div className='view'>
//     {onStageParticipants.map(function(participant) {
//       return (
//       <div className='user'>
//       <h3 className='name'>{participant.name}</h3>
//       <img className='avatar' src={participant.avatar} alt="avatar"/>
//       </div>
//       )
//   })}
//   </div>
