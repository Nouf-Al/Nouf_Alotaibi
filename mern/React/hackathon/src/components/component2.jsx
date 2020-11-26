import React from 'react';
const GameResult = (props) => {
    return (
            <div className="card mt-5">
                
                <div className="card-body">
                    <p>fullness: <span>{props.inputs.fullness}</span></p>
                    <p>happiness: <span>{props.inputs.happiness}</span></p>
                    <p>meals: <span>{props.inputs.meals}</span></p>
                    <p>energy: <span>{props.inputs.energy}</span></p>
                </div>
            </div>
    );
}


export default GameResult;