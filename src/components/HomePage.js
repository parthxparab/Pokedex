import React from "react";
import "../App.css";

const HomePage = () => {
  return (
    <div className="App-body">
      <p style={{ fontSize: "40px" }}>
        A mini-encyclopedia of Pokémon, Berries and Machines.
      </p>
      <b style={{ fontSize: "20px", marginBottom: "5px" }}>Berry/Berries</b>
      <p>
        <img
          style={{ marginTop: "20px" }}
          alt="Show"
          src="https://www.spriters-resource.com/download/66546/"
        />
      </p>
      <p
        style={{ wordWrap: "150px", marginLeft: "100px", marginRight: "100px" }}
      >
        Berries serve many purposes and Pokémon Sword and Shield is no
        different. Within battle, your Pokémon can eat a Berry it is holding
        without costing you a turn for a healing item. Outside, they work like
        potions or status healing items. In Camping, you can use them to make
        Curry for your Pokémon. Whatever the use you have in mind, there are
        many, many different types of Berries! Keeping track of where to find
        them and how to use them can be a real challenge. Fortunately, you now
        have the Pokedex for that!
      </p>

      <b style={{ fontSize: "20px", marginBottom: "5px" }}>Pokémon</b>
      <p>
        <img
          alt="Show"
          style={{ marginTop: "20px" }}
          src="https://cdn.custom-cursor.com/collections/pokemon.png"
        />
      </p>
      <p
        style={{ wordWrap: "150px", marginLeft: "100px", marginRight: "100px" }}
      >
        Pokémon are creatures of all shapes and sizes who live in the wild or
        alongside humans. For the most part, Pokémon do not speak except to
        utter their names. There are currently more than 700 creatures that
        inhabit the Pokémon universe. Pokémon are raised and commanded by their
        owners (called “Trainers”). During their adventures, Pokémon grow, level
        up and become more experienced and even, on occasion, evolve into
        stronger Pokémon.
      </p>
      <b style={{ fontSize: "20px", marginBottom: "5px" }}>
        Machines (TMs and HMs)
      </b>
      <p>
        <img
          alt="Show"
          style={{ marginTop: "20px" }}
          src="https://img.rankedboost.com/wp-content/uploads/2018/11/Pokemon-Lets-Go-TMs.png"
        />
      </p>
      <p
        style={{ wordWrap: "150px", marginLeft: "100px", marginRight: "100px" }}
      >
        Pokemon TMs and HMs are basically machines that can teach Pokemon
        various moves. Pokemon TM stands for Technical Machine which is
        essentially a CD that can be given to Pokemon in order to teach them
        different moves. Pokemon HMs; on the other hand, stand for Hidden
        Machines which are almost identical to Pokemon TMs with a couple of
        differences. While the Pokemon HMs can be taught to multiple Pokemon, a
        TM can only be taught to one Pokemon at a time. However, one thin to
        note here is that TMs can be bought multiple times and can be taught to
        various Pokemon.
      </p>
    </div>
  );
};
export default HomePage;
