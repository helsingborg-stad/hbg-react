"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionItem = function AccordionItem(_ref) {
    var headings = _ref.headings,
        content = _ref.content;
    return _react2.default.createElement(
        "section",
        { className: "accordion-section" },
        _react2.default.createElement(
            "label",
            {
                tabIndex: "0",
                className: "accordion-toggle",
                htmlFor: "accordion-section-1"
            },
            _react2.default.createElement(
                "span",
                { className: "accordion-table" },
                headings.map(function (heading, i) {
                    return _react2.default.createElement(
                        "span",
                        { key: i, className: "column-header" },
                        heading
                    );
                })
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "accordion-content" },
            _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: content } })
        )
    );
};

exports.default = AccordionItem;
module.exports = exports["default"];