import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Game = (props) => {
    const [fullness, setFullness] = useState(20);
    const [happiness, setHappiness] = useState(20);
    const [energy, setEnergy] = useState(50);
    const [meals, setMeals] = useState(3);
    const [message, setMessage] = useState("");


    const Restart = () => {
        setHappiness(20)
        setFullness(20);
        setEnergy(50);
        setMeals(3);
        console.log("Game restarted successfully");
        setMessage("");
    }

    const play = () => {
        console.log('play clicked.');
        setEnergy(energy => energy - 5);
        var rand = Math.floor((Math.random() * 6) + 5);
        setHappiness(happiness + rand)
        setMessage("You Played with your Dojodachi! Happiness +" + rand + ", Energy -5.")
    }

    const feed = () => {
        console.log('feed was clicked.');
        if (meals > 0) {
            setMeals(meals - 1);
            var rand = Math.floor((Math.random() * 6) + 5);
            setFullness(fullness + rand)
            setMessage("You Feed your Dojodachi! Meals -1, Fullness +" + rand + ".");
        }

    }

    const work = () => {
        console.log('work was clicked.');
        let rand = Math.floor((Math.random() * ((3 - 1) + 1)) + 1);
        setMeals(meals + rand);
        setEnergy(energy - 5);
        setMessage("Your Dojodachi worked! Energy -5, Meals +" + rand + ".")
    }

    const sleep = () => {
        console.log('sleep was clicked.');
        setEnergy(energy + 15);
        setFullness(fullness - 5)
        setHappiness(happiness - 5)
        setMessage("Your Dojodachi slept! Energy +15, Happiness -5 and Fullness -5.");
    }


    return (
        <>
            <div className="card mt-5">

                <div className="card-title py-4 bg-dark">
                    <div className="progressBar mx-5 ">
                        <h5 className="text-light "> Fullness </h5>
                        <ProgressBar striped variant="warning" now={fullness} max={100} min={0} animated />
                    </div>

                    <div className="progressBar   mx-5">
                        <h5 className="text-light "> Happiness </h5>
                        <ProgressBar striped variant="success" now={happiness} max={100} min={0} animated />
                    </div>

                    <div className="progressBar  mx-5 ">
                        <h5 className="text-light "> Meals </h5>
                        <ProgressBar striped variant="danger" now={meals} max={100} min={0} animated />
                    </div>

                    <div className="progressBar  mx-5 ">
                        <h5 className="text-light "> Energy </h5>
                        <ProgressBar striped variant="primary" now={energy} max={100} min={0} animated />
                    </div>

                </div>
                
                <div className="card-body">
                    <div className="justify-content-md-center ">
                        {
                            (happiness >= 100 && fullness >= 100 && energy >= 100)?
                            <div><img src="happy.gif" alt="happy"/></div>:
                            <div><img src="giphy.gif" alt="giphy"/></div>
                        }
                    {message  ? <p className="text-info animated bounce infinite">{message}</p>:''}
                    </div>
                </div>

                <div className="card-footer">
                    <div className="btns">
                        {
                            (happiness >= 100 && fullness >= 100 && energy >= 100) || (fullness===0 || happiness===0) ?
                            <button onClick={Restart} className="btn btn-primary" > Restart?</button>:
                            <>
                                <button onClick={feed} className="btn btn-warning"> Feed</button>
                                <button onClick={play} className="btn btn-success" > Play</button>
                                <button onClick={work} className="btn btn-primary"> Work</button>
                                <button onClick={sleep} className="btn btn-secondary"> Sleep</button>
                            </>
                        }
                        
                        
                    </div>
                </div>
            
            </div>

        </>
    );
}

export default Game;