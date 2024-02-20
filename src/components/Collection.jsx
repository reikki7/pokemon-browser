import React from 'react';
import { MdDelete } from 'react-icons/md';
import { usePokemonContext } from './PokemonContext';
import { IoIosHome } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Collection = () => {
    const { collection, removeFromCollection } = usePokemonContext();

    return (
        <div className="flex flex-col items-center justify-center">
            {collection.length === 0 ? (
                <p className="text-lg">No saved pokemon.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 p-4 mx-4 md:mx-32 lg:mx-32 xl:mx-32 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                    {collection.map((pokemon) => (
                        <div
                            key={pokemon.name}
                            className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="p-2 text-center">
                                <img
                                    className="object-cover h-40 mb-2 rounded-xl"
                                    src={pokemon.image}
                                    alt={`Pokemon ${pokemon.name}`}
                                />
                                <h2 className="text-lg font-bold">{pokemon.name}</h2>
                                <p className="text-sm text-gray-900">Alias: {pokemon.alias}</p>
                                <p className="text-sm text-gray-900">Weight: {pokemon.weight}</p>
                                <p className="text-sm text-gray-900">Height: {pokemon.height}</p>
                                <p className="text-sm text-gray-900">Type: {pokemon.type}</p>
                            </div>
                            <button
                                className="flex items-center my-2 space-x-1"
                                onClick={() => removeFromCollection(pokemon.name)}
                            >
                                <MdDelete />
                                <p className="text-sm">Delete from Collection</p>
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <Link to="/">
                <IoIosHome className="p-2 mt-8 text-5xl bg-white border-2 border-gray-500 rounded-full" />
            </Link>
        </div>
    );
};

export default Collection;
