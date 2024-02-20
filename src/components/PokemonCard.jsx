// PokemonCard.js
import React, { useState } from 'react';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import AliasInputModal from './AliasInputModal';
import { usePokemonContext } from './PokemonContext';

const PokemonCard = ({ pokemonList }) => {
    const { addToCollection, removeFromCollection } = usePokemonContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const openModal = (pokemon) => {
        setSelectedPokemon(pokemon);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPokemon(null);
        setIsModalOpen(false);
    };

    const savePokemonToCollection = (alias) => {
        const pokemonWithAlias = {
            ...selectedPokemon,
            alias,
        };
        addToCollection(pokemonWithAlias);
        closeModal();
    };

    return (
        <div className='grid grid-cols-1 gap-4 p-4 mx-4 md:mx-32 lg:mx-32 xl:mx-32 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7'>
            {pokemonList.map((p, index) => (
                <div key={index} className='flex flex-col items-center p-2 transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:-translate-y-2 hover:shadow-2xl'>
                    <img className="object-cover h-40 mb-2 rounded-xl" src={p.image} alt={`Pokemon ${p.name}`} />
                    <div className='p-2 text-center'>
                        <h2 className='text-lg font-bold'>{p.name}</h2>
                        <p className='text-sm text-gray-900'>Weight: {p.weight}</p>
                        <p className='text-sm text-gray-900'>Height: {p.height}</p>
                        <p className='text-sm text-gray-900'>Type: {p.type}</p>
                    </div>
                    <button className='flex items-center my-2 space-x-1' onClick={() => openModal(p)}>
                        <MdOutlineLibraryAdd />
                        <p className='text-sm '>Add to Collection</p>
                    </button>
                </div>
            ))}
            <AliasInputModal isOpen={isModalOpen} onClose={closeModal} onSave={savePokemonToCollection} />
        </div>
    );
};

export default PokemonCard;
