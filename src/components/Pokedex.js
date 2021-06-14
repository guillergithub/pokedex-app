import { useEffect, useState } from 'react'

import Navigator from './Navigator'
import PokemonCard from "./PokemonCard"
import Loader from './Loader'

import getPokemons from '../services/getPokemons'




const Pokedex = () => {
    
    const URL_BASE = 'https://pokeapi.co/api/v2'
    
    const [ pokemons, setPokemons ] = useState([])    
    const [ pokemonsAmount, setPokemonsAmount ] = useState(0)
    const [ types, setTypes ] = useState([])
    const [ pokemonsPerPage, setPokemonsPerPage ] = useState(4) //No tiene el setPokemonsPerPage 
    const [ selectedType, setSelectedType ] = useState('')
    const [ toSearch, setToSearch ] = useState('')
    const [ filteredPokemons, setFilteredPokemons ] = useState([])
    
  
    
    const [ isLoading, setIsLoading ] = useState(false)
    
    
    
    // const [ currentPage, setCurrentPage ] = useState(1)
    

        // const indexOfLastPokemon = currentPage * pokemonsPerPage;
        // const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
        // const currentPokemons = pokemons
    
           
    //This to get the pokemons and types options
    useEffect( () => {        
        setIsLoading(true)

        getPokemons(`${URL_BASE}/pokemon?limit=1118&offset=0`)
            .then(data => {                     
                setIsLoading(false)         
                setPokemons(data.results)                
                setPokemonsAmount(data.count)       
                
            })


            getPokemons(URL_BASE+'/type')
            .then(pokemon => {
                setTypes(pokemon.results)
            })
            
    }, [])  

    //This handle when the SELECT INPUT is onChange
    useEffect( () => {
        if(selectedType) {

            if (selectedType !== 'all') {
                getPokemons(`${URL_BASE}/type/${selectedType}`)
                    .then(res => {

                        const copy = []
                        res.pokemon.forEach((elem) => copy.push(elem.pokemon))
                        setPokemons(copy)                    
                    })
            } else {
                    getPokemons(`${URL_BASE}/pokemon?limit=1118&offset=0`)
                        .then(data => {
                            setPokemons(data.results)
                        })


                }
            }
    }, [selectedType, pokemonsPerPage])

    //This handle the data passed on TEXT INPUT to get pokemons filtered
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
    
    //this handle the input to search a pokemon
    
    const onSubmit = (value) => {
        setToSearch(value.value)

    }

    //This handle the input Types of Pokemons
    const handleSelectType = (e) => {
        setSelectedType(e.target.value)
        
    }

    const handleSelectAmount = (e) => {
        setPokemonsPerPage(e.target.value)
        
    }

    const handleMenu = () => {
        console.log('click')
    }


    const listOfPokemons = filteredPokemons.slice(0, pokemonsPerPage).map( (elem) => {
      
        return (
            <div className='col-3' key={elem.name}>
                <PokemonCard urlPokemon={elem.url} name={elem.name} />
            </div>
        )
    })

    return (
        <div className='pokedex'>  
        
            <Navigator types={types} handleSelectAmount={handleSelectAmount} handleSelectType={handleSelectType} onSubmit={onSubmit}/>      
            <div>
            
                <img className='pokemon-logo-pokedex' alt='pokemon-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'/>                    

                <div className='config-btn-container config-btn' onClick={handleMenu}>
                    <i className="fas fa-cog "></i>
                </div>
            </div>

            <div className='cards-container'> { (!isLoading) ? listOfPokemons : <Loader /> } </div>

            <ul className='pagination'> {/* {renderPagination} */} </ul>                    
        </div>
    )
}

export default Pokedex; 