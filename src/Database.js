import React from "react";
import Icon from './components/Icon.js'
import SearchBar from '../src/components/SearchBar.js'

import data from "./data/database.json";

let iconList = [];
data.forEach((movie)=>{
    iconList.push(<Icon movie_data={movie}/>)
})

function Database(){
    return(
        <div>
            <h1>Full Database</h1>
            <SearchBar/>
            <ul>{iconList}</ul>
        </div>
    )
}

export default Database;
