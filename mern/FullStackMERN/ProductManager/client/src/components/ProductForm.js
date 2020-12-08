import React, { useState } from 'react';

export default ({onSubmitProp,initialTitle,initialDescription,initialPrice}) => {
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle('');
        setPrice('');
        setDescription('');
    }
    return (
        <form onSubmit={submitHandler}><div className="row">
            <div className="col">
                <input type="text" className="form-control m-3 mx-auto" onChange={e => setTitle(e.target.value)} value={title} placeholder="Title"/>
                <input type="Number" className="form-control m-3 mx-auto" placeholder="Price" onChange={e => setPrice(e.target.value)} value={price} />
                <input type="text" className="form-control m-3 mx-auto" placeholder="Description" onChange={e => setDescription(e.target.value)} value={description} />
                <input type="submit" className="btn btn-dark btn-block m-3 mx-auto p-3" value="Submit" />
            </div>
        </div>
        </form>
    );

}