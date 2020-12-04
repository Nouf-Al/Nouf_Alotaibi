import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Resident from './Resident';

const Homeworld = ({ url }) => {
    const [homeworld, setHomeworld] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(response => { setHomeworld(response.data) })
            .catch(err => {
                if (err.response && err.response.status === 404) {
                } else {
                    console.error(err);
                }
            });
    }, [url]);

    if (homeworld === null) {
        return 'Loading..'
    }

    let array = []
    if (homeworld.residents) {
        homeworld.residents.map((one) => {
            array.push(one)
        });
    }

    return (
        <div>
            <p><span className="font-weight-bold">Homeworld:</span> <a href={url}><span className="float-right">{homeworld.name}</span></a></p>
            <p><span className="font-weight-bold">Other People in the same Homeworld:</span>
                {
                    array.map((arr , i) => {
                        return (<Resident key={i} people={arr} />)
                    })
                }
            </p>
        </div>
    );
}
export default Homeworld;
