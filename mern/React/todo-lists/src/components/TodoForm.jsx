import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TodoForm = ({ setInputText, setToDos, toDos, inputText }) => {

    const formHandler = (e) => {
        console.log(e.target.value)
        e.preventDefault();
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setToDos([...toDos, { text: inputText, complete: false, id: Math.random() * 1000 }])
        setInputText('')
    }

    return (
        <form onSubmit={submitHandler}>

            <div className="row">
                <input type="text" className="col-md-11 form-control input d-inline p-4" onChange={formHandler} value={inputText} />

                <button className=" col-md-1 btn input d-inline"><FontAwesomeIcon icon="plus" /></button>
            </div>

        </form>
    );
}

export default TodoForm;