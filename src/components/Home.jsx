import React, { useState, useEffect, useRef } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';
import { Puff } from 'react-loading-icons';
import { IoSearchSharp } from 'react-icons/io5';

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [typeFilter, setTypeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=300");
                setLoading(false);

                const promises = res.data.results.map(async (pokemon) => {
                    const detailRes = await axios.get(pokemon.url);
                    return {
                        name: detailRes.data.name.charAt(0).toUpperCase() + detailRes.data.name.slice(1),
                        order: detailRes.data.order,
                        weight: detailRes.data.weight,
                        height: detailRes.data.height,
                        image: detailRes.data.sprites.other['official-artwork'].front_default,
                        type: detailRes.data.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ')
                    };
                });

                const pokemonDetails = await Promise.all(promises);
                setPokemonList(pokemonDetails);
            } catch (error) {
                console.error("Error:", error.message);
            }
        };

        fetchData();

        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 100);

        return () => clearTimeout(delaySearch);
    }, [searchQuery]);

    const filteredPokemonList = pokemonList.filter((pokemon) =>
        (typeFilter === '' || pokemon.type.toLowerCase().includes(typeFilter.toLowerCase())) &&
        (debouncedSearchQuery === '' || pokemon.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
    );

    if (loading) return (
        <div className='flex items-center justify-center h-screen'>
            <Puff stroke='#13406d' strokeWidth={2} />
        </div>
    );

    return (
        <>
            <div className="flex items-center mx-4 mt-2 mb-4 space-x-2">
                <IoSearchSharp className='text-4xl' />
                <div className='flex-grow'>
                    <input
                        autoComplete='off'
                        type="text"
                        id="searchQuery"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='w-full h-12 px-4 border rounded-md focus:outline-none'
                        ref={inputRef}
                    />
                </div>
                <div className='mr-2'>
                    <select
                        id="typeFilter"
                        onChange={(e) => setTypeFilter(e.target.value)}
                        value={typeFilter}
                        className='w-full h-12 px-4 border rounded-md focus:outline-none'
                    >
                        <option value="">All</option>
                        <option value="bug">Bug</option>
                        <option value="dark">Dark</option>
                        <option value="dragon">Dragon</option>
                        <option value="electric">Electric</option>
                        <option value="fairy">Fairy</option>
                        <option value="fighting">Fighting</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="ghost">Ghost</option>
                        <option value="grass">Grass</option>
                        <option value="ground">Ground</option>
                        <option value="ice">Ice</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="psychic">Psychic</option>
                        <option value="rock">Rock</option>
                        <option value="steel">Steel</option>
                        <option value="water">Water</option>

                    </select>
                </div>
            </div>

            <PokemonCard pokemonList={filteredPokemonList} />
        </>
    );
};

export default Home;
