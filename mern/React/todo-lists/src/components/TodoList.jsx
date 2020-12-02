import React from 'react';
import ToDo from './ToDo'

const TodoList = ({ toDos, setToDos }) => {

    return (
        <div className="">
                {
                    toDos.map((toDo) => {
                        return (
                            <ToDo setToDos={setToDos}
                                toDos={toDos}
                                key={toDo.id}
                                toDo={toDo}
                                text={toDo.text}
                                complete={toDo.complete} />
                        );
                    })
                }
        </div>
    );
}

export default TodoList;