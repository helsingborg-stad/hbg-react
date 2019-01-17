"use strict";

exports.__esModule = true;

var _class, _temp;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

        return _react2.default.createElement(
            "div",
            { className: "notice " + type },
            icon && _react2.default.createElement("i", { className: "pricon " + avalibleIcons[type] }),
            " ",
            children || content
        );
    };

    return Notice;
}(_react.Component), _class.defaultProps = {
    type: "info",
    icon: false
}, _temp);
Notice.propTypes = process.env.NODE_ENV !== "production" ? {
    type: _propTypes2.default.oneOf(["success", "warning", "danger", "info"]),
    icon: _propTypes2.default.bool
} : {};
exports.default = Notice;
module.exports = exports["default"];