import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AuthurForm = ({setName, name}) => {
    const [errors, setErrors] = useState([]); 

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author" ,{name})
        .then(res => {
            console.log(res);
            if(res.data.errors) {
                setErrors(res.data.errors);
            } else {
                navigate("/");
            }
        }).catch(err => console.error(err));
        setName("")
    }

    return (
        
        <div className="text-left m-3" >
            
            <Link to="/">Home</Link>
            <div className="row">
                <div className="col-6">
                <h3 className="float-left my-3 mb-4">Add New Author</h3>
                    <input type="text" className="form-control" placeholder="Author Name" onChange={e => setName(e.target.value)} value={name} />
                    <p className="text-danger">{errors.name ? errors.name.message: ''}</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3">
                    <button className="btn btn-success btn-block" onClick={submitHandler}>Add</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger btn-block" onClick={e=>navigate("/")}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AuthurForm;
