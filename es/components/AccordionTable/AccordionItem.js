import React, { Component } from "react";
import { render } from "react-dom";

var AccordionItem = function AccordionItem(_ref) {
    var headings = _ref.headings,
        content = _ref.content;
    return React.createElement(
        "section",
        { className: "accordion-section" },
        React.createElement(
            "label",
            {
                tabIndex: "0",
                className: "accordion-toggle",
                htmlFor: "accordion-section-1"
            },
            React.createElement(
                "span",
                { className: "accordion-table" },
                headings.map(function (heading, i) {
                    return React.createElement(
                        "span",
                        { key: i, className: "column-header" },
                        heading
                    );
                })
            )
        ),
        React.createElement(
            "div",
            { className: "accordion-content" },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: content } })
        )
    );
};

export default AccordionItem;