function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from "prop-types";
import React, { Component } from "react";

var DropdownToggle = function (_Component) {
    _inherits(DropdownToggle, _Component);

    function DropdownToggle() {
        _classCallCheck(this, DropdownToggle);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DropdownToggle.prototype.render = function render() {
        var props = this.props;
        var classes = props.btnClass ? "c-dropdown__toggle " + props.btnClass : "c-dropdown__toggle";
        return React.createElement(
            "button",
            { className: classes, onClick: props.clickAction, type: "button" },
            props.children || props.title
        );
    };

    return DropdownToggle;
}(Component);

DropdownToggle.propTypes = process.env.NODE_ENV !== "production" ? {
    title: PropTypes.string,
    btnClass: PropTypes.string
} : {};


export default DropdownToggle;