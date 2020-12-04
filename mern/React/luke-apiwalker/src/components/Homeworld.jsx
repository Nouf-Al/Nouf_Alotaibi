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
        <>
            <td>{homeworld.name} <br/> Shared with:
                {
                    array.map((arr, i) => {
                        return (<Resident key={i} people={arr} />)
                    })
                }
            </td>
        </>
    );
}
export default Homeworld;
