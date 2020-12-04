import React from 'react';
import { navigate } from '@reach/router';

const Form = ({ setId, id, setCategory, category, choices }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/' + category + '/' + id + '/');
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-inline justify-content-center">
                <label className="font-weight-bold"> Search for: </label>
                <select value={category} onChange={e => setCategory(e.target.value)} className="form-control custom-select mx-3">
                    {
                        choices.map((choice, idx) => {
                            return (<option key={idx} value={choice}>{choice}</option>);
                        })
                    }
                </select>
                <label className="font-weight-bold">ID: </label>
                <input type="text" value={id} className="form-control mx-3" onChange={e => setId(e.target.value)} />
                <button type="submit" className="btn btn-primary font-weight-bold">Submit</button>
            </form>
        </>
    );
}


export default Form;