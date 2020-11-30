import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Tabs from './Components/Tabs.jsx'
function App() {
  const labels =["Tab 1", "Tab 2", "Tab 3", "Tab 4"]
  const [content, setContent] = useState(labels[0])

  return (
    <div className="container mt-5">
      <div className="jumbotron">
      {
        labels.map(label => <Tabs label={label} setContent={setContent}/>)
      }
        <div className="card">
        <div className="card-body">
        <p>{content}</p>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;