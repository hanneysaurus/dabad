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

function Database() {

    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredMovies = filterMovies(data, searchQuery);
    var movieCount = 0;
    var seriesCount = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].Type === "Series"){
            seriesCount++;
        } else if (data[i].Type === "Movie"){
            movieCount++;
        }
    }

    return (
        <div>
            <h1 className="Subpagefont">Full Database [{movieCount} movies, {seriesCount} seasons]</h1>
            <SearchBar className="SearchBar" searchQuery={searchQuery}
                       setSearchQuery={setSearchQuery}/>
            <ul className="Database">{filteredMovies.map((movie) => (
                <Icon movie_data={movie}/>
            ))}</ul>
        </div>
    )
}

export default Database;
