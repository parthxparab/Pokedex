import React, { Component } from "react";
import axios from "axios";
import noImage from "../img/download.jpeg";
import NoMatch from "./NoMatch";

class Pokemon extends Component {
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
        `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`
      );

      fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`
      ).then(response => {
        console.log(response.status);
      });

      this.setState({ data: data });
      //console.log(this.state.data);
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
          <h2 className="cap-first-letter" style={{ marginTop: "-20px" }}>
            {(this.state.data && this.state.data.name) || "No Title"}
          </h2>
          <img
            style={{ height: "150px", marginTop: "-5px" }}
            alt="Show"
            src={
              (this.state.data && this.state.data.sprites.front_default) ||
              noImage
            }
          />{" "}
          <br />
          <br />
          <p style={{ marginTop: "-5px" }}>
            <b>ID:</b> {(this.state.data && this.state.data.id) || "No ID"}
            <br />
            <b>Height:</b>{" "}
            {(this.state.data && this.state.data.height) || "No Height"}
            <br />
            <b>Weight:</b>{" "}
            {(this.state.data && this.state.data.weight) || "No Weight"}
            <br />
          </p>
          <b>Type(s): </b>
          <dl>
            {(this.state.data &&
              this.state.data.types.map(genre => {
                return <dt key={genre.type.name}>{genre.type.name}</dt>;
              })) ||
              "No Type"}
          </dl>
          <b>Top 5 Move(s): </b>
          <dl>
            {(this.state.data &&
              this.state.data.moves.slice(0, 5).map(genre => {
                return <dt key={genre.move.name}>{genre.move.name}</dt>;
              })) ||
              "No Type"}
          </dl>
        </div>
      );

      return body;
    }
  }
}

export default Pokemon;
