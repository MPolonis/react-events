import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Gotowy"
    }
  }

  handleClick = (event) => {
    this.setState({ message: `kliknięty (${event.type})`})
  }

  handleEvent = () => {
    console.log("Wywołano metodę handleEvent")
  }

  render() {
    return (
      <div className="m-2">
        <div className="h4 bg-primary text-white text-center p-2">
          {this.state.message}
        </div>
        <div className="text-center">
          <button onClick={this.handleClick} className="btn btn-primary">Kliknij mnie!</button>
        </div>
      </div>
    )
  }
}