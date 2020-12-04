import React from 'react';
import { navigate } from '@reach/router';

const Form = ({ setId, id, setCategory, category, choices }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/' + category + '/' + id + '/');
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="justify-content-center my-5">
                <div className="row my-auto mx-auto rounded shadow p-4">
                    <div className="col-sm-5"><select className="form-control" value={category} onChange={e => setCategory(e.target.value)}>
                        {
                            choices.map((choice, idx) => {
                                return (<option key={idx} value={choice}>{choice}</option>);
                            })
                        }
                    </select>
                    </div>
                    <div className="col-sm-5"><input type="number" value={id} className="form-control" onChange={e => setId(e.target.value)} /></div>
                    <div className="col-sm-2"><button type="submit" className="btn btn-dark font-weight-bold btn-block">Submit</button></div>
                </div>
            </form>
        </>
    );
}


export default Form;