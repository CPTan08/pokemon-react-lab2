import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";

//const bulbasaur = pokemonData[0];

// function FilterPokemon(pokemonData) {
//   for (var i = 0; i < pokemonData.length; i++) {
//     var thisPoke = pokemonData[i];
//   }
//   return thisPoke;
// }

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <div className="card">
      <img
        className="images"
        src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}
        alt=""
      />
      <div className="container">
        <h3>{name.english}</h3>
      </div>
      <div className="container">
        <h3>{name.japanese}</h3>
      </div>
      <div className="container">
        {type.map((subtype) => {
          return (
            <span className={`type ${subtype.toLowerCase()}`}>{subtype} </span>
          );
        })}
      </div>

      <br></br>
      <div className="container">HP:{base.HP}</div>
      <div className="container">Attack: {base.Attack}</div>
      <div className="container">Defence: {base.Defence}</div>
      <div className="container">SP Attack:{base.SpAttack}</div>
      <div className="container">SP Defence:{base.SpDefence}</div>
      <div className="container">Speed: {base.Speed}</div>
      <br></br>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <PokemonCard pokemon={bulbasaur} /> */}
      <div className="gallery">
        {pokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
