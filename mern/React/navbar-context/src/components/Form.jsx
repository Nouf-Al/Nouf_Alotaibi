import React,{useContext} from 'react';

import {NavBarContext} from './context';

const Form = () => {
    const [name, setName] = useContext(NavBarContext)
    return (
        <>
        <form>
            <div className="row m-5">
                <div className="col">
                <input type="text" className="form-control p-3 py-4" placeholder="Write your name here" onChange={e=>setName(e.target.value)} value={name}/>
                </div>
            </div>
        </form>
        </>
    );
};

export default Form;