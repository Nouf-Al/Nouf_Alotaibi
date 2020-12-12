import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TeamList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }, [players]);

    const removeFromDom = playersId => {
        setPlayers(players.filter(player => player._id !== playersId));
    }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/player/${id}`)
            .then(res => removeFromDom(id))
    }


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
                            {
                                players.map((player) => {
                                    return (
                                        <tr key={player._id}>
                                            <td><Link to={`/players/list/${player._id}`}>{player.name}</Link></td>
                                            <td>{player.position}</td>
                                            <td><button className="btn btn-danger btn-block" onClick={e => deleteHandler(player._id)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            
        </>
    );
};

export default TeamList;