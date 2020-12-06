import React from 'react';

const Results = ({ result }) => {
    
    return (
        <>
            <div className="card">
                <div className="card-header bg-danger text-dark">{result.title}</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={result.image_url} alt="img" style={{ width: "100%" }} />
                        </div>
                        <div className="col-sm-9">
                            <h5>Score: {result.score}</h5>
                            <h5>Episodes: {result.episodes}</h5>
                            <p>Description: {result.synopsis}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Results;