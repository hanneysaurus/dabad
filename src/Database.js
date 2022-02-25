import React from "react";
import Icon from './components/Icon.js'
import SearchBar from '../src/components/SearchBar.js'
import './Database.css'
import data from "./data/database.json";
import {useState} from "react";


const filterMovies = (movies, query) => {
    if (!query) {
        return movies;
    }

    return movies.filter((movie) => {
        // TODO: add more search query options here
        const movie_title = movie.Title.toLowerCase();
        return movie_title.includes(query);
    });
};

function Database(){

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredMovies = filterMovies(data, searchQuery);

    return(
        <div>
            <h1 className="Subpagefont">Full Database</h1>
            <SearchBar searchQuery={searchQuery}
                       setSearchQuery={setSearchQuery}/>
            <ul>{filteredMovies.map((movie)=>(
                <Icon movie_data={movie}/>
            ))}</ul>
        </div>
    )
}
export default Database;
