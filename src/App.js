import Nav from "./components/Nav"
import Homepage from "./components/Pages/Homepage"
import { useState, useEffect } from "react"
import axios from "axios"
import './styles/app.scss'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(48)

  useEffect(() => {
    const fetchPokemon = async () => {

      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=48&offset=${(offset * page - offset)}`)
      setPokemonList(res.data.results)
    }
    fetchPokemon()
  }
    , [offset, page])

  // console.log(pokemonList)

  return (

    <div className="App">
      {/* <Nav /> */}
      <Homepage page={page} setPage={setPage} offset={offset} pokemonList={pokemonList} />
    </div>
  );
}

export default App;
