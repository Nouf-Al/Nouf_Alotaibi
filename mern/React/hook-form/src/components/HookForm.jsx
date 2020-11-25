import React, { useState } from 'react';
const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setC_password] = useState("");

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

    return (
            <div className="form mt-5">
                <form onSubmit={createUser}>
                    <div className="form-row">
                        <label htmlFor="">First Name</label>
                        <input className="form-control" type="text" onChange={e => setFirstname(e.target.value)} value={ firstname }/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="">Last Name</label>
                        <input className="form-control" type="text" onChange={e => setLastname(e.target.value)} value={ lastname }/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="">Email</label>
                        <input className="form-control" type="text" onChange={e => setEmail(e.target.value)} value={ email }/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="">Password</label>
                        <input className="form-control" type="text" onChange={e => setPassword(e.target.value)} value={ password }/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="">Confirm Password</label>
                        <input className="form-control" type="text" onChange={e => setC_password(e.target.value)} value={ c_password }/>
                    </div>
                    <div className="form-row">
                        <input type="submit" className="form-control  btn btn-outline-warning" value="Submit" />
                    </div>
                </form>
            </div>
    );
}


export default HookForm;