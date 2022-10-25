import React, { createContext, useEffect, useState } from 'react'


export const CharactersContext = createContext()

export const CharactersProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState(1)

  const baseURI = "https://rickandmortyapi.com/api";

  useEffect(() => {
      fetch(baseURI + `/character/?page=${pagination}`)
        .then((e) => e.json())
        .then((e) => setCharacters(e.results));
    return () => {};
  }, [pagination]);

  return (
    <CharactersContext.Provider value={{
        characters,
        setCharacters,
        baseURI,
        pagination,
        setPagination
    }} >{props.children}</CharactersContext.Provider>
  )
}
