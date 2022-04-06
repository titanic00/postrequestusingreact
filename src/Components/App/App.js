import React from "react";
import "./App.css";
import { Input } from "../Input/Input";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredLink: "",
      shortedLink: "",
    };

    this.enterLink = this.enterLink.bind(this);
    this.makeShortLink = this.makeShortLink.bind(this);
  }

  enterLink(newLink) {
    this.setState({
      enteredLink: newLink,
    });
  }

  makeShortLink() {
    const api = "APIKEY";
    const url = "https://api.rebrandly.com/v1/links";
    const data = JSON.stringify({ destination: this.state.enteredLink });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'apikey': api
      },
      body: data,
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (error) => {
          console.log(error.message);
        }
      )
      .then((jsonResponse) => {
        this.setState({
          shortedLink: jsonResponse["shortUrl"],
        });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Put your link here: </h1>
        <Input
          enteredLink={this.state.enteredLink}
          setLink={this.enterLink}
          shortLink={this.makeShortLink}
        />
        <h1>{this.state.shortedLink}</h1>
        <h1>{this.state.enteredLink}</h1>
      </div>
    );
  }
}

export default App;
