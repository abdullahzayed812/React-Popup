import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false
    }
    this.showPopUp = this.showPopUp.bind(this);
  }
  showPopUp() {
    const showBool = this.state.showPopUp;
    this.setState({showPopUp: !showBool});
  }
  render() {
    return (
      <div className="App">
        <h1>Pup up Modal</h1>
        <button
          type="button"
          onClick={this.showPopUp}
        >Click to {this.state.showPopUp ? "Hide" : "Show"}</button>
        <div
          className={this.state.showPopUp ? "pop-up active" : "pop-up"}
        >
          <img src="/smufer.jfif" alt="" />
        </div>
      </div>
    );
  }
}

export default App;
