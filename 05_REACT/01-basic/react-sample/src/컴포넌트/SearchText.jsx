import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';

const SearchText = () => {
    const { text, setText } = useContext(SearchContext);
    return (
        <div>
            <input type="text"
                value={text} 
                onChange={(event) => setText(event.target.value)}/>

        </div>
    )
}

export default SearchText
