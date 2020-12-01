import React from 'react';

const TextColor =(props)=>{
    const myStyle = {
        color:props.color
    }
    
    return (
    <h3 style={myStyle}>The Word is: {props.value}</h3>
    );
}

export default TextColor;