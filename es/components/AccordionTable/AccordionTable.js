import React, { Component } from "react";
import { render } from "react-dom";

import AccordionItem from "./AccordionItem";
import SearchField from "./SearchField";

var AccordionTable = function AccordionTable(_ref) {
    var headings = _ref.headings,
        items = _ref.items,
        showSearch = _ref.showSearch,
        doSearch = _ref.doSearch,
        langFilterOn = _ref.langFilterOn,
        langNoResults = _ref.langNoResults;
    return React.createElement(
        "div",
        null,
        React.createElement(
            "header",
            { className: "accordion-table accordion-table-head" },
            headings.map(function (heading, i) {
                return React.createElement(
                    "span",
                    { key: i, className: "column-header" },
                    heading
                );
            })
        ),
        React.createElement(
            "div",
            { className: "accordion accordion-icon accordion-list" },
            showSearch && React.createElement(SearchField, { doSearch: doSearch, langFilterOn: langFilterOn }),
            Object.keys(items).length === 0 && React.createElement(
                "div",
                { className: "gutter" },
                React.createElement(
                    "p",
                    null,
                    langNoResults
                )
            ),
            items.map(function (item) {
                return React.createElement(AccordionItem, {
                    key: item.id,
                    headings: item.headings,
                    content: item.content
                });
            })
        )
    );
};

export default AccordionTable;