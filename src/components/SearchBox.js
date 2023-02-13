import React from "react";
import './SearchBox.css';

const SearchBox = ( { SearchChange } ) => {
    return (
        <input
        type='search'
        placeholder='search robots'
        onChange={SearchChange}
        />
    );
}

export default SearchBox;