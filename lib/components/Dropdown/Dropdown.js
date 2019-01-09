"use strict";

exports.__esModule = true;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactOnclickoutside = require("react-onclickoutside");

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _DropdownList = require("./DropdownList");

var _DropdownList2 = _interopRequireDefault(_DropdownList);

var _DropdownItem = require("./DropdownItem");

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownToggle = require("./DropdownToggle");

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Enable spread operator
_react2.default.__spread = Object.assign;

//Class wrapped in onclickoutside HOC

var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            listOpen: false
        };
        return _this;
    }

    Dropdown.prototype.handleClickOutside = function handleClickOutside() {
        if (!this.state.listOpen) {
            return;
        }

        this.setState({
            listOpen: false
        });
    };

    Dropdown.prototype.toggleList = function toggleList() {
        this.setState(function (prevState) {
            return { listOpen: !prevState.listOpen };
        });
    };

    Dropdown.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            list = _props.list,
            toggleItem = _props.toggleItem,
            title = _props.title,
            toggleClass = _props.toggleClass;
        var listOpen = this.state.listOpen;

        return _react2.default.createElement(
            "div",
            { className: "c-dropdown" },
            _react2.default.createElement(_DropdownToggle2.default, {
                btnClass: toggleClass || "btn btn-primary",
                clickAction: function clickAction() {
                    return _this2.toggleList();
                },
                title: title
            }),
            listOpen && _react2.default.createElement(
                _DropdownList2.default,
                null,
                list.map(function (item, index) {
                    if (typeof item.title == "undefined") {
                        return null;
                    }

                    var id = item.id || index;
                    var key = item.key || "";

                    var props = {};

                    props.key = id;
                    props.title = item.title;

                    if (typeof item.classes != "undefined") {
                        props.classes = item.classes;
                    }

                    if (typeof item.href != "undefined") {
                        props.href = item.href;
                    } else if (typeof item.onClickAction != "undefined") {
                        props.onClickAction = function () {
                            return item.onClickAction(id, key);
                        };
                    }

                    if (typeof props.href == "undefined" && typeof props.onClickAction == "undefined") {
                        return null;
                    }

                    return _react2.default.createElement(_DropdownItem2.default, props);
                })
            )
        );
    };

    return Dropdown;
}(_react.Component);

Dropdown.propTypes = process.env.NODE_ENV !== "production" ? {
    list: _propTypes2.default.array,
    title: _propTypes2.default.string,
    toggleClass: _propTypes2.default.string
} : {};
exports.default = (0, _reactOnclickoutside2.default)(Dropdown);
module.exports = exports["default"];