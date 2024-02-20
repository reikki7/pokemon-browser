import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [collection, setCollection] = useState([]);

    const addToCollection = (pokemon) => {
        setCollection((prevCollection) => [...prevCollection, pokemon]);
    };

    const removeFromCollection = (pokemonName) => {
        setCollection((prevCollection) =>
            prevCollection.filter((pokemon) => pokemon.name !== pokemonName)
        );
    };

    return (
        <PokemonContext.Provider value={{ collection, addToCollection, removeFromCollection, setCollection }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => {
    return useContext(PokemonContext);
};
