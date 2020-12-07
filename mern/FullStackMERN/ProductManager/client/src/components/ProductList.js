import { Link } from '@reach/router';
import React, { useState } from 'react';
import axios from 'axios';


export default (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
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
                    props.products.map((product,idx) => {
                        return (
                            <tr key={idx}>
                                <td><Link to={"/product/"+product._id}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><button className="btn btn-danger btn-block" onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>

    );

}