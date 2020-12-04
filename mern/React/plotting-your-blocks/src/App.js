import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
    return (
        <div className="app m-4">
            <Header className="Header" />
            <div className="row my-3">
                <Navigation className="Navigation" />
                <Main className="Main">
                    <div className="row d-flex">
                        <SubContents className="SubContents col" />
                        <SubContents className="SubContents col" />
                        <SubContents className="SubContents col" />
                    </div>
                    <div className="row my-5 mx-auto">
                        <Advertisement className="Advertisement" />
                    </div>
                </Main>
            </div>
        </div>
    );
}
export default App;