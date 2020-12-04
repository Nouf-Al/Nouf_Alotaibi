import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Homeworld from './Homeworld';

const Results = ({ id, category }) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);

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
                <table class="table table-hover table-light shadow ">
                    <thead>
                        <tr>
                            <th>Height</th>
                            <th>Mass</th>
                            <th>Hair color</th>
                            <th>Skin color</th>
                            <th>Homeworld</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{result.height}</td>
                            <td>{result.mass}</td>
                            <td>{result.hair_color}</td>
                            <td>{result.skin_color}</td>
                            <Homeworld url={result.homeworld} />
                        </tr>
                    </tbody>
                </table>
            </>
        );
    } else if (category === 'planets') {
        resultDisplay = (
            <>
                <table class="table table-hover table-light shadow ">
                    <thead>
                        <tr>
                            <th>Climate</th>
                            <th>Terrain</th>
                            <th>Surface water</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{result.climate}</td>
                            <td>{result.terrain}</td>
                            <td>{result.surface_water}</td>
                            <td>{result.population}</td>
                        </tr>
                    </tbody>
                </table>
            </>

        );
    } else {
        resultDisplay = (
            <>
                <table class="table table-hover table-light shadow ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Skin colors</th>
                            <th>Average lifespan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{result.name}</td>
                            <td>{result.language}</td>
                            <td>{result.skin_colors}</td>
                            <td>{result.average_lifespan}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }

    return (
        <>
            {
                error ?
                    <><div class="alert alert-dark" role="alert">These aren't the droids you're looking for</div></>: resultDisplay
            }
        </>
    );
}
export default Results;
