import React from 'react';

const TextBackground =(props)=>{
    const myStyle = {
        color:props.color,
        backgroundColor:props.background,
    }
    
    return (
    <h3 style={myStyle}>The Word is: {props.value}</h3>
    );
}

export default TextBackground;