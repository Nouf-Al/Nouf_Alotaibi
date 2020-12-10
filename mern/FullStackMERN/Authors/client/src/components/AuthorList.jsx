import axios from 'axios';
import { Link } from '@reach/router';

const AuthorList = (props) => {

    const { removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
        })
    }
    
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.authors.map((author, i) => {
                            return (
                                <tr key={i}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={"author/" + author._id + "/edit"}><button className="btn btn-success" >Edit</button></Link>
                                        <button onClick={(e) => { deleteAuthor(author._id) }} className="btn btn-danger" >Delete</button></td>
                                </tr>)
                            })
                    }
                </tbody>
            </table>
        </>
    );
};

export default AuthorList;