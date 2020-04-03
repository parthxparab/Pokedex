import React, { Component } from "react";
import axios from "axios";
import noImage from "../img/download.jpeg";
import NoMatch from "./NoMatch";

class Berry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    };
  }
  componentDidMount() {
    this.getShow();
  }

  async getShow() {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/berry/${this.props.match.params.id}`
      );

      fetch(
        `https://pokeapi.co/api/v2/berry/${this.props.match.params.id}`
      ).then(response => {
        console.log(response.status);
      });
      fetch(data.item.url)
        .then(response => response.json())
        .then(item => {
          if (item) {
            data.sprites = item.sprites.default;
            this.setState({ data: data });
            console.log(this.state.data);
          }
        });
    } catch (e) {
      console.log(`error ${e}`);
      this.setState({ requestFailed: true });
    }
  }

  render() {
    let body = null;

    if (this.state.requestFailed === true) {
      return <NoMatch />;
    } else {
      body = (
        <div className="show-body">
          <h2 className="cap-first-letter">
            {(this.state.data && this.state.data.name) + " berry" || "No Title"}
          </h2>
          <img
            style={{ height: "100px" }}
            alt="Show"
            src={(this.state.data && this.state.data.sprites) || noImage}
          />{" "}
          <br />
          <br />
          <p>
            <b>ID:</b> {(this.state.data && this.state.data.id) || "No ID"}
            <br />
            <b>Size:</b>{" "}
            {(this.state.data && this.state.data.size) || "No Size"}
            <br />
            <b>Firmness:</b>{" "}
            {(this.state.data && this.state.data.firmness.name) ||
              "No firmness"}
            <br />
            <b>Natural Gift Type:</b>{" "}
            {(this.state.data && this.state.data.natural_gift_type.name) ||
              "No Natural Gift Type"}
            <br />
            <b>Natural Gift Power:</b>{" "}
            {(this.state.data && this.state.data.natural_gift_power) ||
              "No Natural Gift Power"}
            <br />
          </p>
          <b>Flavors based on Potency: </b>
          <dl>
            {(this.state.data &&
              this.state.data.flavors.map(genre => {
                return (
                  <dt key={genre.flavor.name}>
                    {genre.flavor.name} - {genre.potency}
                  </dt>
                );
              })) ||
              "No Genre"}
          </dl>
        </div>
      );

      return body;
    }
  }
}

export default Berry;
