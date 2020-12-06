import './App.css';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Results from './components/Results';


function App() {
  const [result, setResult] = useState({})

  return (
    <div className="container">
      <div className="jumbotron">
        <Search onSearch={anime=>{setResult(anime)}} setResult={setResult}/>
      </div>
      <Results result={result} />
    </div>
  );
}

export default App;
