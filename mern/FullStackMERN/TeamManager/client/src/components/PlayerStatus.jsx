import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PlayerStatus = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err))
    }, [players]);

    const clickHandler = (id, btnValue) => {
        if (btnValue === "Playing") {
            axios.put(`http://localhost:8000/api/player/${id}`, { status: "Playing" })
                .then(res => { console.log(res.data) })
                .catch(err => console.log(err))
        } else if (btnValue === "Not Playing") {
            axios.put(`http://localhost:8000/api/player/${id}`, { status: "Not Playing" })
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        } else if (btnValue === "Undecided") {
            axios.put(`http://localhost:8000/api/player/${id}`, { status: "Undecided" })
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <p className="h3 mt-3">Player Status - Game 1</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="h5  my-5"><Link to="/">Game 1</Link> | <Link to="/">Game 2</Link> | <Link to="/" >Game 3</Link></p>
                </div>
            </div>
            <div className="row border border-dark">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                players.map((player) => {
                                    return (
                                        <tr key={player._id}>
                                            <td>{player.name}</td>
                                            <td>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <button onClick={e => clickHandler(player._id, "Playing")} className={player.status === "Playing" ? "mx-3 btn-block  btn btn-success" : "mx-3 btn-block  btn btn-outline-success"}>Playing</button>
                                                    </div>
                                                    <div className="col-4">
                                                        <button onClick={e => clickHandler(player._id, "Not Playing")} className={player.status === "Not Playing" ? "mx-3 btn-block  btn btn-danger" : "mx-3 btn-block  btn btn-outline-danger"}>Not Playing</button>
                                                    </div>
                                                    <div className="col-4">
                                                        <button onClick={e => clickHandler(player._id, "Undecided")} className={player.status === "Undecided" ? "mx-3 btn-block  btn btn-warning" : "mx-3 btn-block  btn btn-outline-warning"}>Undecided</button>
                                                    </div>
                                                </div>
                                            </td>
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

export default PlayerStatus;