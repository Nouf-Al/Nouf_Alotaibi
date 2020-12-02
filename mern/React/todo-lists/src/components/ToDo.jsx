import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ToDo = ({ text, toDo, toDos, setToDos, complete }) => {

    const deleteHandler = () => {
        setToDos(toDos.filter(el => el.id !== toDo.id));
    }

    const checkHandler = () => {
        const temp = [...toDos]



        setToDos(temp.map(el => {
            if (el.id === toDo.id) {
                return {
                    ...el, complete: !el.complete
                }
            }
            return el;
        }));
    }

    return (
        <div className="item-row">
            {
                <div className="row item py-4">
                                        <label className={ "  col-md-10 form-control" ,complete ? "complete" : ""}> {text}. </label> 
                                        <button onClick={deleteHandler} className=" col-md-1 float-right btn input d-inline"><FontAwesomeIcon icon="minus" /></button>
                                        <button className=" btn float-right input col-md-1"  onClick={checkHandler}><FontAwesomeIcon  icon="check" /></button>
                </div>
            }
        </div>
    );
}

export default ToDo;