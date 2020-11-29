import React , {useState} from 'react';


const BoxDisplay = (props) => {

    // let co = props.color;
    const mystyle = {
        backgroundColor: props.color.newColor,
        height: props.color.newHeight+'px',
        width: props.color.newWidth+"px"
    };

    return (
        <>
        <div className="mr-4 mb-4" style={mystyle}>
        </div>
        </>
    );
}

export default BoxDisplay;