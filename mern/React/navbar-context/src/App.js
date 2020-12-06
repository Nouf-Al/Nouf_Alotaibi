import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import {Wrapper} from './components/context';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
