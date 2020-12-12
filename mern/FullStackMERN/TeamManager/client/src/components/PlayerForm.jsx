import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';

const TeamList = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]); 


    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/player",{name,position})
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/players/list");
                }})
            .catch(err => console.error(err));
        setName("")
        setPosition("")
    }

    return (
        <>
            <div className="row border border-dark p-3">
                <div className="col">
                    <form onSubmit={submitHandler} >
                        <p className="h2 float-left my-3">Add Player</p>
                        <input type="text" className="form-control my-3" placeholder="Player Name" value={name} onChange={e=>setName(e.target.value)}/>
                        <p className="text-danger float-left">{errors.name ? errors.name.message: ''}</p>
                        <input type="text" className="form-control my-3" placeholder="Player Position" value={position} onChange={e=>setPosition(e.target.value)}/>
                        <input type="submit" className="btn btn-info btn-block my-3" value="Add New Player" /> 
                    </form>
                </div>
            </div>
        </>
    );
};

export default TeamList;