import React from "react";
import "./Input.css";

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.shortLink();
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.setLink(value);
  }

  render() {
    return (
      <div id="input">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.props.enteredLink}
          />
          <button>CLICK</button>
        </form>
      </div>
    );
  }
}
