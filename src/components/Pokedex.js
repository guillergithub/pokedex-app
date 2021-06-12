import { useEffect, useState } from 'react'

import Navigator from './Navigator'
import PokemonCard from "./PokemonCard"
import Loader from './Loader'

import getPokemons from '../services/getPokemons'
// import { set } from 'react-hook-form'



const Pokedex = () => {
    
    const URL_BASE = 'https://pokeapi.co/api/v2'
    
    const [ pokemons, setPokemons ] = useState([])    
    const [ pokemonsAmount, setPokemonsAmount ] = useState(0)
    const [ types, setTypes ] = useState([])
    const [ pokemonsPerPage ] = useState(4) //No tiene el setPokemonsPerPage 
    const [ selectedType, setSelectedType ] = useState('')
    const [ toSearch, setToSearch ] = useState('')
    const [ filteredPokemons, setFilteredPokemons ] = useState([])
    
    const [ isLoading, setIsLoading ] = useState(false)
    
    
    // const [ currentPage, setCurrentPage ] = useState(1)
    

        // const indexOfLastPokemon = currentPage * pokemonsPerPage;
        // const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
        // const currentPokemons = pokemons
    
    //First api call to get pokemons types options
    useEffect(() => {
        getPokemons(URL_BASE+'/type')
            .then(pokemon => {
                setTypes(pokemon.results)
            })
    }, [])

    //This to get the pokemons cards info
    useEffect( () => {
        setIsLoading(true)
        getPokemons(`${URL_BASE}/pokemon?limit=${pokemonsPerPage}&offset=100`)
            .then(data => {                     
                setIsLoading(false)         
                setPokemons(data.results)
                setPokemonsAmount(data.count)       
            })
    }, [pokemonsPerPage])  

    //This handle when the select input is onChange
    useEffect( () => {
        if(selectedType) {
            console.log(selectedType)
            getPokemons(`${URL_BASE}/type/${selectedType}?limit=${pokemonsPerPage}&offset=100`)
                .then(res => {
                    console.log(res.pokemon)
                    const copy = []
                    res.pokemon.forEach((elem) => copy.push(elem.pokemon)) 
                    setPokemons(copy.slice(0, pokemonsPerPage))                    
                })
        }
    }, [selectedType, pokemonsPerPage])

    //This handle the data passed on input to get pokemons filtered
    useEffect(() => {
        setFilteredPokemons(pokemons.filter( pokemon => {
            return pokemon.name.toLowerCase().includes(toSearch.toLowerCase())
        }))

    }, [toSearch, pokemons])

    

    const pages = []

    for(let i=1; i <= Math.ceil(pokemonsAmount/pokemonsPerPage); i++) {
        pages.push(i)
    }


    // const renderPagination = pages.map( (num) => {
    //     return (
    //         <li key={num} id={num}>
    //             {num}
    //         </li>
    //     )
    // })

    const onSubmit = (value) => {
        setToSearch(value.value)
        console.log('Pokemon a buscar: ', value.value)
    }

    const handleSelect = (e) => {
        setSelectedType(e.target.value)
        console.log('Tipo de Pokemon: ',e.target.value)
    }

    const listOfPokemons = filteredPokemons.slice().map( (elem) => { //Hay que agregar parametros al SLICE      
      
        return (
            <div className='col-3' key={elem.name}>
                <PokemonCard urlPokemon={elem.url} name={elem.name} />
            </div>
        )
    })

    return (
        <div className='pokedex'>  
        
            <Navigator types={types} handleSelect={handleSelect} onSubmit={onSubmit}/>      
            <div>
                <img className='pokemon-logo' alt='pokemon-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'/>                    
                <div className='config-btn-container'>
                    <i className="fas fa-cog config-btn"></i>
                </div>

            </div>
            <div className='cards-container'> 
                {/* {listOfPokemons} */}
                { (!isLoading) ? listOfPokemons : <Loader /> }
            </div>

            <ul className='pagination'>
         
                {/* {renderPagination} */}
            </ul>                    
        </div>
    )
}

export default Pokedex; 