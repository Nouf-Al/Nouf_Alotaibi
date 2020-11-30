import React from 'react'

const Tabs = (props) => {
    return (
        <button className="btn btn-danger mr-3 my-4"  onClick={()=> props.setContent(props.label)}>
            {props.label}
        </button>
    )
}

export default Tabs ; 