import React, { useContext } from 'react';
import { NavBarContext } from './context';

const Navbar = () => {
    const [name] = useContext(NavBarContext)

    return (
        <div className="row">
            <div className="col bg-info p-5">
                <div className="float-left h3">Hi {name}</div>
            </div>
        </div>
    );
};

export default Navbar;