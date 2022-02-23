import stylesheet from './SearchBar.css'

const SearchBar = () => {
    return (
        <form action="/" method="get">
            <input
                type="text"
                id="searchbar"
                placeholder="search movies"
                name="s"
                style={stylesheet}
            />
            <button type="submit" id="searchbutton">search</button>
        </form>
    )
}

export default SearchBar;
