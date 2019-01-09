import React, { Component } from "react";
import { render } from "react-dom";

var SearchField = function SearchField(_ref) {
    var doSearch = _ref.doSearch,
        langFilterOn = _ref.langFilterOn;
    return React.createElement(
        "div",
        { className: "accordion-search" },
        React.createElement("input", { type: "text", onChange: doSearch, placeholder: langFilterOn })
    );
};

export default SearchField;