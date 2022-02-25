import './App.css';
import {Route, Routes} from "react-router-dom";

import Navigation from './Navigation.js'
import Database from './Database.js'
import './App.css'

function App() {
    return (
        <div className="App">
            <h1 className="Titlefont">DABAD - DVD and BluRay Administrator</h1>
            <Navigation/>
            <Routes>
                <Route exact path="/database" element={<Database/>}/>
            </Routes>
        </div>
    );
}

export default App;
