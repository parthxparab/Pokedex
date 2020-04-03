import React, { Component } from "react";
import axios from "axios";
import noImage from "../img/download.jpeg";
import NoMatch from "./NoMatch";

class Machine extends Component {
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
        `https://pokeapi.co/api/v2/machine/${this.props.match.params.id}`
      );

      fetch(
        `https://pokeapi.co/api/v2/machine/${this.props.match.params.id}`
      ).then(response => {
        console.log(response.status);
      });

      fetch(data.item.url)
        .then(response => response.json())
        .then(item => {
          if (item) {
            data.sprites = item.sprites.default;
            this.setState({ data: data });
            //console.log(this.state.data);
          }
        });

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
          <h2 className="cap-first-letter">
            {(this.state.data && this.state.data.item.name) || "No Title"}
          </h2>
          <img
            style={{ height: "150px" }}
            alt="Show"
            src={(this.state.data && this.state.data.sprites) || noImage}
          />{" "}
          <br />
          <br />
          <p>
            <b>ID:</b> {(this.state.data && this.state.data.id) || "No ID"}
            <br />
            <b>Move:</b>{" "}
            {(this.state.data && this.state.data.move.name) || "No Move"}
            <br />
            <b>Version:</b>{" "}
            {(this.state.data && this.state.data.version_group.name) ||
              "No Version"}
            <br />
          </p>
        </div>
      );

      return body;
    }
  }
}

export default Machine;
