import React, { useState } from 'react';



const Api = (props) => {
    const [pokemons, setPokemons] = useState([]);

    

    const clickHandler = () =>{
        
            fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
                .then(response => response.json())
                .then(response => setPokemons(response.results))

    };
    
    return (
        <>
        <button onClick={clickHandler}>Fetch Pokemons</button>
        <div>
            {pokemons.length > 0 && pokemons.map((pokemon, index) => {
                return (<div key={index}>{pokemon.name}</div>)
            })}
            </div>
        </>
    );

}
export default Api;