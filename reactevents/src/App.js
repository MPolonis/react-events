import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Gotowy",
      counter: 0,
      theme: "secondary"
    }
  }

  handleClick = (event) => {
    this.setState({ message: `kliknięty (${event.type})`})
  }

  handleEvent = (event, newTheme) => {
    event.persist();
    this.setState({counter: this.state.counter + 1,
        theme: newTheme
    },
        () => this.setState({message: `${event.type}: ${this.state.counter}`}));
  }

  toggleCheckBox = (event) => {
    if(this.state.counter === 0) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="m-2">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" onClick={this.toggleCheckBox} />
          <label>To jest pole wyboru</label>
        </div>
        <div className={`h4 bg-${this.state.theme} text-white text-center p-2}`}>
          {this.state.message}
        </div>
        <div className="text-center">
          <button onClick={(e) => this.handleEvent(e, "primary")} className="btn btn-primary">normalny</button>
          <button onClick={(e) => this.handleEvent(e, "danger")} className="btn btn-danger">uwaga!</button>
        </div>
      </div>
    )
  }
}