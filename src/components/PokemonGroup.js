import React from 'react'
import PokemonCard from './PokemonCard'
import image from "../images/pokemonLogo.png"

export default function PokemonGroup({ pokemonList }) {
    let i = 0
    return (
        <div>
            <div className="logo-container">
                <img className="pokemon-logo" src={image} alt="" srcset="" />
            </div>

            <div className="pokemon-group">


                {pokemonList.map((pokemon) => (

                    <PokemonCard pokemon={pokemon} key={i++} pokemonList={pokemonList} />

                ))}
            </div>
        </div>
    )
}
