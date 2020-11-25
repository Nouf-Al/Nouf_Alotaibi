import React, { useState } from 'react';
const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setC_password] = useState("");
    const [errors, setErrors] = useState({});

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, c_password }
        console.log("Welcome", newUser);
        props.setInputs(newUser);
        // for making the values inside the inputs disappears.
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setC_password('');
    }

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        let message = "";
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            message = " First name must be at least 2 characters.";
        } 
        // else if (e.target.value.length === 0) {
        //     message = "First name is required";
        // }
        setErrors({ ...errors, firstname: message });
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        let message = "";
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            message = " Last name must be at least 2 characters.";
        } 
        // else if (e.target.value.length === 0) {
        //     message = "Last name is required";
        // }
        // setErrors({ ...errors, lastname: message });

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        let message = "";
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            message = " Email must be at least 5 characters.";
        } 
        // else if (e.target.value.length === 0) {
        //     message = "Email is required";
        // }
        setErrors({ ...errors, email: message });

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        let message = "";
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            message = "Password should be at least 8 characters";
        } 
        // else if (e.target.value.length === 0) {
        //     message = "Password is required";
        // } 
        else if (e.target.value !== c_password) {
            message = "Password and confirm password do not match";
        }
        setErrors({ ...errors, password: message });
    }

    const handleC_password = (e) => {
        setC_password(e.target.value);
        let message = "";
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            message = "Confirm Password should be at least 8 characters";
        } 
        // else if (e.target.value.length === 0) {
        //     message = "Confirm Password is required";
        // } 
        else if (e.target.value !== password) {
            message = "Password and confirm password do not match";
        }
        setErrors({ ...errors, c_password: message });

    }

    return (
        <div className="form mt-5">
            <form onSubmit={createUser}>
                <div className="form-row">
                    <label htmlFor="">First Name</label>
                    <input className="form-control" type="text" onChange={e => setFirstname(e.target.value)} value={firstname} onBlur={handleFirstname} />
                    <p style={{ color: 'red' }}>{errors.firstname}</p>
                </div>
                <div className="form-row">
                    <label htmlFor="">Last Name</label>
                    <input className="form-control" type="text" onChange={e => setLastname(e.target.value)} value={lastname} onBlur={handleLastname} />
                    <p style={{ color: 'red' }}>{errors.lastname}</p>
                </div>
                <div className="form-row">
                    <label htmlFor="">Email</label>
                    <input className="form-control" type="text" onChange={e => setEmail(e.target.value)} value={email} onBlur={handleEmail} />
                    <p style={{ color: 'red' }}>{errors.email}</p>
                </div>
                <div className="form-row">
                    <label htmlFor="">Password</label>
                    <input className="form-control" type="text" onChange={e => setPassword(e.target.value)} value={password} onBlur={handlePassword} />
                    <p style={{ color: 'red' }}>{errors.password}</p>
                </div>
                <div className="form-row">
                    <label htmlFor="">Confirm Password</label>
                    <input className="form-control" type="text" onChange={e => setC_password(e.target.value)} value={c_password} onBlur={handleC_password} />
                    <p style={{ color: 'red' }}>{errors.c_password}</p>
                </div>
                <div className="form-row">
                {
                    firstname.length >2 && lastname.length>2 && email.length>5 && password.length>8 && c_password.length>8 && c_password === password?
                    <input type="submit" className="form-control  btn btn-outline-warning" value="Submit" />:
                    <input type="submit" className="form-control  btn btn-outline-warning" value="Submit" disabled />
                }
                </div>

                

            </form>
        </div>
    );
}


export default HookForm;