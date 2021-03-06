import React, { Component } from 'react';
import { render } from 'react-dom';

const SearchField = ({ doSearch, langFilterOn }) => (
    <div className="accordion-search">
        <input type="text" onChange={doSearch} placeholder={langFilterOn} />
    </div>
);

export default SearchField;
