import Form from './components/form';
import Results from './components/Results';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from '@reach/router';
import { useState } from 'react';


function App() {
  const choices = ['people', 'planets', 'species'];
  const [category, setCategory] = useState(choices[0])
  const [id, setId] = useState(0)

  return (
    <div className="container">
      <div className="jumbotron">
        <Form category={category} setCategory={setCategory} setId={setId} choices={choices} id={id} />
        <Router>
          <Results path="/:category/:id" id={id} category={category} />
        </Router>
      </div>
    </div>
  );
}

export default App;
