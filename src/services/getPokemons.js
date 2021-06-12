

const getPokemons = (url) => {

    const promise = fetch(url)
        .then(res => res.json())

    return promise
}

export default getPokemons;