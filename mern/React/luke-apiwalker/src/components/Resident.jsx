import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Resident = ({ people }) => {
    const [residents, setResidents] = useState([]);
    useEffect(() => {
        axios.get(people)
            .then(response => setResidents(response.data.name))
            .catch(err => {
                if (err.response && err.response.status === 404) {
                } else {
                    console.error(err);
                }
            });
    }
        , [people]);

    if (people === null) {
        return 'Loading..'
    }

    return (
        <a href={people}><br />- {residents} </a>
    );


}
export default Resident;
