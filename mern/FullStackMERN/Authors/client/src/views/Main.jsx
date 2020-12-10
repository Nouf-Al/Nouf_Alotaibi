import AuthorList from "../components/AuthorList";
import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    function bubble(authors) {
        const arr = [...authors];
            for(let i=0; i<arr.length; i++) {
                for(let j=0; j<arr.length-i-1; j++) {
                    if(arr[j].name > arr[j+1].name) {
                        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                    }
                }
            }
        return arr;
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(bubble(res.data));
                setLoaded(true);
            });
    },[]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    
    return (
        <div className="text-left m-3">
            <Link to="/new">Add new Author</Link>
            {loaded && <AuthorList setAuthors={setAuthors} authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    );
}

export default Main;
