import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
    const [q, setQ] = useState("")
    const [results, setResults] = useState([])


    useEffect(
        () => {
            if (q.length > 0) {
                console.log("q is changeing")
                axios.get("https://api.jikan.moe/v3/search/anime?q=" + q)
                    .then(res => setResults(res.data.results))
            } else {
                setResults([]);
            }
        }
        , [q]

    );

    const submitHandler = (e) => {
        e.preventDefault();
        if (results.length > 0) {
            onSearch(results[0])
            setQ("")

        }
        setResults([]);
        setQ("")

    }

    return (
        <>
            <form className="row" onSubmit={submitHandler}>
                <div className="col-9">
                    <input type="search" value={q} className="form-control" onChange={e => setQ(e.target.value)} placeholder="Search .." />
                </div>
                <div className="col-3">
                    <input type="submit" value="Go" className="btn btn-dark btn-block" />
                </div>
            </form>
            <ul className="list-group">
                {
                    results.slice(0, 5).map((anime) => <li key={anime.mal_id} className="list-group-item">{anime.title}</li>)
                }
            </ul>
        </>
    );
};



export default Search;