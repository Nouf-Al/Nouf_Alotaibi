import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (

        <form onSubmit={submitHandler}><div className="row">
            <div className="col">
                <input type="text" className="form-control m-3 mx-auto" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title} />
                <input type="Number" className="form-control m-3 mx-auto" placeholder="Price" onChange={e => setPrice(e.target.value)} value={price} />
                <input type="text" className="form-control m-3 mx-auto" placeholder="Description" onChange={e => setDescription(e.target.value)} value={description} />
                <input type="submit" className="btn btn-dark btn-block m-3 mx-auto p-3" value="Create" />
            </div>
        </div>
        </form>

    );

}