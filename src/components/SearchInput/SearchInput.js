import './SearchInput.css'
import { useState } from 'react'

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    return(
        <form className="container-search-field">
            <input 
                className="search-field" 
                type="text" 
                name="searchField" 
                value={searchValue} 
                onChange={handleChange}
                placeholder="Título, personaje o genero"
            />
        </form>
    )
}
export default SearchInput