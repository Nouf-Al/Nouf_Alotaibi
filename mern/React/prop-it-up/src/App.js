import React from 'react';

import './App.css';
import PersonCard from './components/component1'
function App() {
    return (
        <div className="container">
            <div className="App">

                <PersonCard first_name="Nouf" last_name="Alotaibi" age={23} hairColor="Brown" />

                <PersonCard first_name="Rawan" last_name="Alotaibi" age={24} hairColor="Black" />

                <PersonCard first_name="Reem" last_name="Alotaibi" age={17} hairColor="Black" />

                <PersonCard first_name="Razan" last_name="Alotaibi" age={12} hairColor="Dark Brown" />

            </div>
        </div>
    );
}

export default App;
