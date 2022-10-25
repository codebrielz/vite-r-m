import React, { useContext, useState } from "react";
import { CharactersContext } from "../context/CharactersContext";

export const BuscarPersonajeScreen = () => {

  const {characters} = useContext(CharactersContext);
  const [searchCharacter, setSearchCharacter] = useState('');

  const handleInputChange = (e) => {
    setSearchCharacter(e.target.value)
  };

  return (
    <div className="m-5">
      <h3 className="w-100 text-center pb-5">Buscador de personajes</h3>
      <input type="search" placeholder="buscar personaje" className="w-100" style={{ outline: "none" }} onChange={handleInputChange}/>
      {searchCharacter !== "" ? (
        <div className="d-flex flex-wrap justify-content-center">
          {characters.length !== 0 && characters.map((character, i) =>
              character.name.trim().toLowerCase().includes(searchCharacter.trim().toLowerCase()) && 
              <div className="d-flex flex-column p-5" key={i}>
                <img src={character.image} alt="" />
                <span><strong>{character.name}</strong></span>
              </div>
          )}</div>
      ) : (
        "No hay busquedas"
      )}
    </div>
  );
};
