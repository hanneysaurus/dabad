import './App.css';
import {Route, Routes} from "react-router-dom";

import Navigation from './Navigation.js'
import Database from './Database.js'
import DetailPage from './components/DetailPage.js'
import './App.css'

function App() {
    return (
        <div className="App">
            <h1 className="Titlefont">DABAD - DVD and BluRay Administrator</h1>
            <Navigation/>
            <Routes>
                <Route exact path="/database" element={<Database/>}/>
                <Route exact path="/movie/:movie_id" element={<DetailPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
