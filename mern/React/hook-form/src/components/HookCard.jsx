import React from 'react';
import '../App.css';
const HookCard = (props) => {
    return (
            <div className="card mt-5">
                <div className="card-header">
                    <h3>User Information</h3>
                </div>
                <div className="card-body">
                    <p>First Name: <span className="float-right">{props.inputs.firstname}</span></p>
                    <p>Last Name: <span className="float-right">{props.inputs.lastname}</span></p>
                    <p>Email: <span className="float-right">{props.inputs.email}</span></p>
                    <p>Password: <span className="float-right">{props.inputs.password}</span></p>
                    <p>Confirm Password: <span className="float-right">{props.inputs.c_password}</span></p>
                </div>
            </div>
    );
}


export default HookCard;