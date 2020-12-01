import React from 'react';


const NumberOrWord =(props)=>{
        let n = props.value;
        if (!isNaN(n)) {
            return (<h3>The Number is: {props.value}</h3>);
        }else{
            return (<h3>The Word is: {props.value}</h3>);
        }
}

export default NumberOrWord;