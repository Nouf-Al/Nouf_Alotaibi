import { Link } from '@reach/router';
import React, { useState } from 'react';


export default (props) => {
    return (
        <div className="row mt-5">
            <table className="table bg-light mx-3">
                <tr className="thead-dark ">
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                {
                    props.products.map((product,idx) => {
                        return (
                            <tr key={idx}>
                                <td><Link to={"/product/"+product._id}>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>

    );

}