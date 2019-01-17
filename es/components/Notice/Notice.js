var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from "prop-types";
import React, { Component } from "react";

var Notice = (_temp = _class = function (_Component) {
    _inherits(Notice, _Component);

    function Notice() {
        _classCallCheck(this, Notice);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Notice.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            content = _props.content,
            icon = _props.icon,
            type = _props.type;

        var avalibleIcons = {
            success: "pricon-check",
            warning: "pricon-notice-warning",
            danger: "pricon-notice-danger",
            info: "pricon-info-o"
        };

        return React.createElement(
            "div",
            { className: "notice " + type },
            icon && React.createElement("i", { className: "pricon " + avalibleIcons[type] }),
            " ",
            children || content
        );
    };

    return Notice;
}(Component), _class.defaultProps = {
    type: "info",
    icon: false
}, _temp);
Notice.propTypes = process.env.NODE_ENV !== "production" ? {
    type: PropTypes.oneOf(["success", "warning", "danger", "info"]),
    icon: PropTypes.bool
} : {};


export default Notice;