import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default (props) => {
    const { id } = props;
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            axios.get("http://localhost:8000/api/author/" + id)
                .then((res) => setName(res.data.name))
                .catch(err => console.error(err));
        }
    }, [id]);

    // console.log(name);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, { name })
            .then(res => {
                console.log(res);
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="text-left m-3" >
            <Link to="/">Home</Link>
            {
                name ?
                    <>
                        <div className="row">
                            <div className="col-6">
                                <h3 className="float-left my-3 mb-4">Edit an Author</h3>
                                <input type="text" className="form-control" placeholder="Author Name" onChange={e => setName(e.target.value)} value={name} />
                                <p className="text-danger">{errors.name ? errors.name.message : ''}</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-3">
                                <button className="btn btn-success btn-block" onClick={updateAuthor}>Update</button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-danger btn-block" onClick={e => navigate("/")}>Cancel</button>
                            </div>
                        </div>
                    </> :
                    <>
                        <div class="alert alert-danger mt-5" role="alert">
                            Author doesn't exist. Would you like to add new author? <Link to="/new">click here</Link>
                        </div>
                    </>
            }
        </div>
    );
};

