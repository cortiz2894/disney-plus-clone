import './SearchInput.css'

const SearchInput = ({value, updateValue}) => {

    const handleChange = (e) => {
        updateValue(e.target.value)
    }

    return(
        <form className="container-search-field">
            <input 
                className="search-field" 
                type="text" 
                name="searchField" 
                value={value}
                onChange={handleChange}
                placeholder="Título, personaje o genero"
            />
        </form>
    )
}
export default SearchInput