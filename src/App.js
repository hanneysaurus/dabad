import './App.css';
import {Route, Routes, Link} from "react-router-dom";

import Navigation from './Navigation.js'
import Database from './Database.js'

function App() {
    return (
        <div className="App">
            <h1>DABAD - DVD and BluRay Administrator</h1>
            <Navigation/>
            <Routes>
                <Route exact path="/database" element={<Database/>}/>
            </Routes>
        </div>
    );
}

export default App;
