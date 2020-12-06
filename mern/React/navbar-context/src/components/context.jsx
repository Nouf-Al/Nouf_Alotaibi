import React, { useState, createContext } from 'react';

export const NavBarContext = createContext();

export const Wrapper = (props) => {
    const [name,setName]=useState("")

    return (
        <NavBarContext.Provider value={[name,setName]}>
            {props.children}
        </NavBarContext.Provider>
    );
};

