import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import { useEffect, useState } from 'react';

function App() {
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log('Check 1 2 3 ');
    socket.on('Welcome', data => console.log(data));
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
