import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeamList = (props) => {
    const [player, setPlayer] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player/${props.id}`)
            .then(res => {setPlayer(res.data);
            })
            .catch(err => console.log(err))
    }, [props.id]);


    return (
        <>
            <div className="row border border-dark">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Player Position</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>{player.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TeamList;