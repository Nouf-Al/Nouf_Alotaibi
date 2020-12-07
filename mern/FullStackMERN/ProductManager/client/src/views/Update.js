import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {

    const { id } = props;
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));

            navigate("/product")
    }

    return (
        <form onSubmit={updateProduct}><div className="row">
            <div className="col">
                <input type="text" className="form-control m-3 mx-auto" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title} />
                <input type="Number" className="form-control m-3 mx-auto" placeholder="Price" onChange={e => setPrice(e.target.value)} value={price} />
                <input type="text" className="form-control m-3 mx-auto" placeholder="Description" onChange={e => setDescription(e.target.value)} value={description} />
                <input type="submit" className="btn btn-dark btn-block m-3 mx-auto p-3" value="Update" />
            </div>
        </div>
        </form>
    )
}
