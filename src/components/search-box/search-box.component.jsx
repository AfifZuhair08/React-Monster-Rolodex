import React from 'react';

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        // synthetic event (re-render everytimes fields input is changing)
        onChange={handleChange}
    />
)