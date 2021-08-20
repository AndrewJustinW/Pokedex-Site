import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'

export default function PokemonCard({ pokemon, pokemonList }) {

    const [pokemonInfo, setPokemonInfo] = useState({})
    const [types, setTypes] = useState([])

    let idNumber = ('0000' + pokemonInfo.id).slice(-3);


    // Fetching individual card information.
    useEffect(() => {
        const fetchSinglePokemon = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            setPokemonInfo(res.data)
            // console.log(res.data)
            let loadedTypes = []

            for (let i = 0; i < res.data.types.length; i++) {
                loadedTypes.push(res.data.types[i].type.name)
            }

            setTypes(loadedTypes)
        }

        fetchSinglePokemon()


    }, [pokemon.name,])

    console.log(pokemonList)

    // change color of type background
    const typeColor = (type) => {
        let color = ""
        switch (type) {
            case "grass":
                color = "green"
                break
            case "fire":
                color = "orange"
                break
            case "water":
                color = "skyblue"
                break
            case "poison":
                color = "purple"
                break
            case "electric":
                color = "rgb(238, 223, 12)"
                break
            case "rock":
                color = "grey"
                break
            case "ground":
                color = "brown"
                break
            case "normal":
                color = "darkgrey"
                break
            case "psychic":
                color = "darkpurple"
                break
            case "fairy":
                color = "hotpink"
                break
            case "fighting":
                color = "darkred"
                break
            case "flying":
                color = "teal"
                break
            case "bug":
                color = "rgb(134, 212, 17)"
                break
            case "ghost":
                color = "pink"
                break
            case "dragon":
                color = "indianred"
                break


            default:
                break;
        }

        return color;
    }

    // console.log(pokemonInfo)
    if (pokemonInfo.sprites === undefined || pokemonInfo.types === undefined) {
        return (
            <div></div>
        )
    }

    return (
        <div className="pokemon-card">
            <div className="pokemon-card-image">
                <img src={pokemonInfo.sprites.front_default} alt="" />

            </div>
            <div className="pokemon-desc">
                <h3 className="pokemon-id">{`# ${idNumber}`}</h3>

                <h2 className="pokemon-name">{pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}</h2>

                <ul className="pokemon-types">
                    {types.map((type) => (
                        <li className="pokemon-type" style={{ backgroundColor: typeColor(type) }}>{type[0].toUpperCase() + type.slice(1)}</li>
                    ))}
                </ul>

                {/* <div className="evolution-container">

                    {evolutions.map((evolution) => (
                        <img className="evolution-image" src={evolution} alt="Evolution" />
                    ))} */}

                {/* <div className="evolution-image" >
                        evolution
                    </div>

                    <div className="evolution-image" >
                        evolution

                    </div> */}

                {/* </div> */}

            </div>
        </div>
    )
}
