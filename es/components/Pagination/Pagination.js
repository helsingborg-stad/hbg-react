function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from "prop-types";
import React, { Component } from "react";
import Button from "../Button/Button";
import Input from "../Form/Input";

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination() {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Pagination.prototype.render = function render() {
        var _props = this.props,
            current = _props.current,
            total = _props.total,
            next = _props.next,
            prev = _props.prev,
            input = _props.input,
            langPrev = _props.langPrev,
            langNext = _props.langNext;


        return React.createElement(
            "div",
            { className: "o-grid" },
            React.createElement(
                "div",
                { className: "o-grid-fit u-mr-auto" },
                React.createElement(
                    "div",
                    { className: "o-grid sm-gutter grid-va-middle" },
                    React.createElement(
                        "div",
                        { className: "o-grid-fit" },
                        React.createElement(
                            "div",
                            { className: "c-field" },
                            React.createElement(Input, {
                                value: current,
                                type: "number",
                                min: "1",
                                max: total,
                                onChange: input,
                                style: { maxWidth: '80px' }
                            })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "o-grid-fit  u-display--flex u-align-items--center" },
                        React.createElement(
                            "span",
                            null,
                            " / ",
                            total
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "o-grid-fit" },
                React.createElement(
                    "div",
                    { className: "o-grid sm-gutter" },
                    React.createElement(
                        "div",
                        { className: "o-grid-fit" },
                        React.createElement(
                            Button,
                            {
                                color: "primary",
                                onClick: prev,
                                disabled: current === 1
                            },
                            React.createElement("i", { className: "pricon pricon-previous u-hidden@md u-hidden@lg u-hidden@xl" }),
                            " ",
                            langPrev ? React.createElement(
                                "span",
                                { className: "u-hidden@xs u-hidden@sm" },
                                langPrev
                            ) : null
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "o-grid-fit" },
                        React.createElement(
                            Button,
                            {
                                color: "primary",
                                onClick: next,
                                disabled: current === total
                            },
                            langNext ? React.createElement(
                                "span",
                                { className: "u-hidden@xs u-hidden@sm" },
                                langNext
                            ) : null,
                            " ",
                            React.createElement("i", { className: "pricon pricon-next u-hidden@md u-hidden@lg u-hidden@xl" })
                        )
                    )
                )
            )
        );
    };

    return Pagination;
}(Component);

Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
    current: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    input: PropTypes.func.isRequired,
    langPrev: PropTypes.string,
    langNext: PropTypes.string
} : {};


export default Pagination;