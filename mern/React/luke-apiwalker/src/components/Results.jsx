import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homeworld from './Homeworld';

const Results = ({ id, category }) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);
    const [homeworld, setHomeworld] = useState([]);

    useEffect(() => {
        setError(false);
        axios.get('https://swapi.dev/api/' + category + '/' + id + '/')
            .then(response => { setResult(response.data) })
            .catch(err => {
                if (err.response && err.response.status === 404) {
                    setError(true);
                } else {
                    console.error(err);
                }
            });
    }, [category, id]);

    if (result === null) {
        return 'Loading..'
    }

    var resultDisplay;
    if (category === 'people') {
        resultDisplay = (
            <>
                <p><span className="font-weight-bold">Height:</span> <span className="float-right">{result.height}</span></p>
                <p><span className="font-weight-bold">Mass:</span> <span className="float-right">{result.mass}</span></p>
                <p><span className="font-weight-bold">Hair color:</span> <span className="float-right">{result.hair_color}</span></p>
                <p><span className="font-weight-bold">Skin color:</span> <span className="float-right">{result.skin_color}</span></p>
                {/* <p><span className="font-weight-bold">Homeworld:</span> <a href={result.homeworld}><span className="float-right">{result.homeworld}</span></a></p> */}
                <Homeworld url={result.homeworld} />

            </>
        );
    } else if (category === 'planets') {
        resultDisplay = (
            <>
                <p><span className="font-weight-bold">Climate:</span> <span className="float-right">{result.climate}</span></p>
                <p><span className="font-weight-bold">Terrain:</span> <span className="float-right">{result.terrain}</span></p>
                <p><span className="font-weight-bold">Surface water:</span> <span className="float-right">{result.surface_water}</span></p>
                <p><span className="font-weight-bold">Population:</span> <span className="float-right">{result.population}</span></p>
            </>
        );
    } else {
        resultDisplay = (
            <>
                <p><span className="font-weight-bold">Name:</span> <span className="float-right">{result.name}</span></p>
                <p><span className="font-weight-bold">Language:</span> <span className="float-right">{result.language}</span></p>
                <p><span className="font-weight-bold">Skin colors:</span> <span className="float-right">{result.skin_colors}</span></p>
                <p><span className="font-weight-bold">Average lifespan:</span> <span className="float-right">{result.average_lifespan}</span></p>
            </>
        );
    }

    return (
        <>
            <div className="card my-5 ">
                <div className="card-title bg-dark text-light">
                    <h3 className="text-center font-weight-bold">{result.name}</h3>
                </div>
                <div className="card-body">
                    {
                        error ?
                            <>
                                <p>These aren't the droids you're looking for</p>
                            </> :
                            resultDisplay
                    }
                </div>
            </div>
        </>
    );
}
export default Results;
