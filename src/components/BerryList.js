import React, { Component } from "react";
import axios from "axios";
import NoMatch from "./NoMatch";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BerryCard from "./BerryCard";

class BerryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pokemon: [],
      offset: 0,
      limit: 12,
      pageCount: 0,
      next: "",
      previous: "",
      totalPage: null,
      id: this.props.match.params.id
    };
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.handleLessClick = this.handleLessClick.bind(this);
  }

  handleMoreClick(event) {
    if (this.state.next !== null) {
      this.setState({ pageCount: this.state.pageCount + 1 }, () => {
        this.setState({ id: Number(this.state.id) + 1 }, () => {
          console.log("Id: " + this.state.id);
          this.getShows();
          console.log("pagecount: ", this.state.pageCount);
        });
      });
    }
  }
  handleLessClick(event) {
    if (this.state.previous !== null) {
      this.setState({ pageCount: this.state.pageCount - 1 }, () => {
        this.setState({ id: Number(this.state.id) - 1 }, () => {
          console.log("Id: " + this.state.id);
          this.getShows();
          console.log("pagecount: ", this.state.pageCount);
        });
      });
    }
  }
  componentDidMount() {
    this.getShows();
  }
  componentWillReceiveProps(nextProps) {
    var nextProductId = nextProps.match.params.id; // from the new url
    this.setState({ id: nextProductId }, () => {
      this.getShows();
    });
  }

  async getShows() {
    this.state.data = [];

    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/berry?offset=" +
          String(this.state.limit * this.state.id) +
          "&limit=" +
          String(this.state.limit)
      );

      this.setState({ next: data.next }, () => {
        console.log("next: " + this.state.next);
      });
      this.setState(
        { totalPage: Math.ceil(data.count / this.state.limit) },
        () => {
          console.log("total Page: " + this.state.totalPage);
          if (
            this.state.id >= this.state.totalPage ||
            isNaN(this.state.id) === true ||
            typeof this.state.id === "undefined"
          ) {
            this.setState({ requestFailed: true });
          }
        }
      );
      this.setState({ previous: data.previous }, () => {
        console.log("previous: " + this.state.previous);
      });

      this.setState({ pokemon: data["results"] });
      this.state.pokemon.map(item => {
        return fetch(item.url)
          .then(response => response.json())
          .then(data => {
            if (data) {
              var temp = this.state.data;
              temp.push(data);
              fetch(data.item.url)
                .then(response => response.json())
                .then(item => {
                  if (item) {
                    data.sprites = item.sprites.default;
                    //console.log(data);
                    this.setState({ data: temp });
                  }
                });
            }
          })
          .catch(console.log);
      });
    } catch (e) {
      console.log(e);
    }
  }

  renderedPokemonList = pokemon => {
    return (
      <a key={pokemon.id} href={`/berry/${pokemon.id}`}>
        <BerryCard pokemon={pokemon} />
      </a>
    );
  };

  // buildListItem = show => {
  //   {
  //     let img = null;
  //     if (show.image && show.image.medium) {
  //       img = <img alt="Show" src={show.image.medium} />;
  //     } else {
  //       img = <img alt="Show" src={noImage} />;
  //     }

  //     return (
  //       <div>
  //         <li key={show.id}>
  //           <a href={`/berry/${show.id}`}>
  //             {img} <br />
  //             {show.name} {show.id}
  //           </a>
  //         </li>
  //       </div>
  //     );
  //   }
  // };

  render() {
    let body = null;
    // let li = null;
    if (this.state.requestFailed === true) {
      return <NoMatch />;
    } else {
      // li =
      //   this.state.data &&
      //   this.state.data.map(show => {
      //     return this.buildListItem(show);
      //   });

      body = (
        <Router>
          <div className="App-body">
            {this.state.previous == null && (
              <Link to={`/berry/page/${Number(this.state.id) + 1}`}>
                <button
                  type="button"
                  className="showlink-body"
                  key="next-button"
                  id="next-button"
                  onClick={this.handleMoreClick}
                >
                  Next
                </button>
              </Link>
            )}

            {this.state.next == null && (
              <Link to={`/berry/page/${Number(this.state.id) - 1}`}>
                <button
                  type="button"
                  className="showlink-body"
                  key="previous-button"
                  id="previous-button"
                  onClick={this.handleLessClick}
                >
                  Back
                </button>
              </Link>
            )}

            {this.state.next !== null && this.state.previous !== null && (
              <div>
                <Link to={`/berry/page/${Number(this.state.id) - 1}`}>
                  <button
                    type="button"
                    className="showlink-body"
                    key="previous-button"
                    id="previous-button"
                    onClick={this.handleLessClick}
                  >
                    Back
                  </button>
                </Link>
                <Link to={`/berry/page/${Number(this.state.id) + 1}`}>
                  <button
                    type="button"
                    className="showlink-body"
                    key="next-button"
                    id="next-button"
                    onClick={this.handleMoreClick}
                  >
                    Next
                  </button>
                </Link>
              </div>
            )}

            <div className="container">
              <div className="card-columns">
                {this.state.data &&
                  this.state.data.map(show => {
                    return this.renderedPokemonList(show);
                  })}
              </div>
            </div>
            {/* <ul className="list-unstyled">{li}</ul> */}
          </div>
        </Router>
      );
      return body;
    }
  }
}

export default BerryList;
