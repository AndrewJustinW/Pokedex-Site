import PokemonGroup from "../PokemonGroup"
import PageBar from "../PageBar"

export default function Homepage({ pokemonList, page, setPage, }) {
    return (
        <div className="homepage">

            <PokemonGroup pokemonList={pokemonList} />
            <PageBar page={page} setPage={setPage} />

        </div>
    )
}
