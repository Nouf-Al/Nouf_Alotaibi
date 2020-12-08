import { Link } from '@reach/router';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';


export default (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProducts(res.data));
    }, [products])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }


    return (
        <div className="row mt-5">
            <table className="table bg-light mx-3">
                <tr className="thead-dark ">
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                {
                    products.map((product,idx) => {
                        return (
                            <tr key={idx}>
                                <td><Link to={"/product/"+product._id}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>

    );

}