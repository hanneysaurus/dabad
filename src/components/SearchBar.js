import stylesheet from './SearchBar.css'

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <form action="/" method="get">
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="searchbar"
                placeholder=" search movies"
                name="s"
                style={stylesheet}
            />
            <button type="submit" id="searchbutton">search</button>
        </form>
    )
}

export default SearchBar;
