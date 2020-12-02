import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './components/Fa';

function App() {
  const [inputText, setInputText] = useState('')
  const [toDos, setToDos] = useState([]);
  // const [status, setStatus] = useState("all");


  useEffect(() => {
    getLocalToDos();
  }, []);

  useEffect(() => {
    saveLocalToDos();
  }, [toDos]);

  const saveLocalToDos = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }

  const getLocalToDos = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let toDoLocal = JSON.parse(localStorage.getItem("toDos", JSON.stringify(toDos)));
      setToDos(toDoLocal);
    }
  }
  return (
    <>

      <div className="container">
        <div>
          <div className="row mt-5 ">
            <div className="col">
              <TodoForm inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText} />
            </div>

          </div>
          <div className="row mt-5">
            <div className="col">
              <TodoList toDos={toDos} setToDos={setToDos} />
            </div>
          </div>

        </div>
      </div>


    </>
  );
}

export default App;
