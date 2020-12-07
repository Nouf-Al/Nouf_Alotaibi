import './App.css';
import Main from './views/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="jumbotron">
        <h3>Product Manager</h3>
      <Main />
      </div>
      </div>
    </div>
  );
}

export default App;
