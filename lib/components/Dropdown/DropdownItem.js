"use strict";

exports.__esModule = true;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownItem = function (_Component) {
    _inherits(DropdownItem, _Component);

    function DropdownItem() {
        _classCallCheck(this, DropdownItem);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    DropdownItem.prototype.render = function render() {
        var props = this.props;
        var dynamicProps = {};

        if (typeof props.classes != "undefined") {
            dynamicProps.className = props.classes;
        }

        if (typeof props.href != "undefined") {
            dynamicProps.href = props.href;
        }

        if (typeof props.onClickAction != "undefined") {
            dynamicProps.onClick = props.onClickAction;
        }

        return _react2.default.createElement(
            "a",
            dynamicProps,
            props.title
        );
    };

    return DropdownItem;
}(_react.Component);

DropdownItem.propTypes = process.env.NODE_ENV !== "production" ? {
    classes: _propTypes2.default.string,
    href: _propTypes2.default.string,
    onClickAction: _propTypes2.default.func
} : {};
exports.default = DropdownItem;
module.exports = exports["default"];