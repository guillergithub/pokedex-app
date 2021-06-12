import { useParams } from 'react-router-dom'

const PokemonEncounters = () => {

    const { PokemonName } = useParams()

    return (
        <div className='pokemon-chars overflow-auto moves-container'>
            <p>Hello, i'm Encounters page</p>
            <h1>{PokemonName}</h1>

        </div>
    )
}

export default PokemonEncounters