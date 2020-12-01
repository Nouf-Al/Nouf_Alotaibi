import React , {useState} from 'react';
import axios from 'axios';


function App() {
  const [pokemons, setPokemons] = useState([]);

    

    const clickHandler = () =>{
        
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{setPokemons(response.data.results)})
        .catch(err=>{
          console.log(err);
      });

    }
    
    return (
        <>
        <button onClick={clickHandler}>Fetch Pokemons</button>
        <div>
            {pokemons.map((pokemon, index) => {
                return (<div key={index}>{pokemon.name}</div>)
            })}
            </div>
        </>
    );

}

export default App;
