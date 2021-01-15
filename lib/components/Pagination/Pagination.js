"use strict";

exports.__esModule = true;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../Button/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Input = require("../Form/Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


        return _react2.default.createElement(
            "div",
            { className: "o-grid" },
            _react2.default.createElement(
                "div",
                { className: "o-grid-fit u-mr-auto" },
                _react2.default.createElement(
                    "div",
                    { className: "o-grid sm-gutter grid-va-middle" },
                    _react2.default.createElement(
                        "div",
                        { className: "o-grid-fit" },
                        _react2.default.createElement(
                            "div",
                            { className: "c-field" },
                            _react2.default.createElement(_Input2.default, {
                                value: current,
                                type: "number",
                                min: "1",
                                max: total,
                                handleChange: input,
                                style: { maxWidth: '80px' }
                            })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "o-grid-fit  u-display--flex u-align-items--center" },
                        _react2.default.createElement(
                            "span",
                            null,
                            " / ",
                            total
                        )
                    )
                )
            ),
            _react2.default.createElement(
                "div",
                { className: "o-grid-fit" },
                _react2.default.createElement(
                    "div",
                    { className: "o-grid sm-gutter" },
                    _react2.default.createElement(
                        "div",
                        { className: "o-grid-fit" },
                        _react2.default.createElement(
                            _Button2.default,
                            {
                                color: "default",
                                onClick: prev,
                                disabled: current === 1
                            },
                            _react2.default.createElement("i", { className: "pricon pricon-previous u-hidden@md u-hidden@lg u-hidden@xl" }),
                            " ",
                            langPrev ? _react2.default.createElement(
                                "span",
                                { className: "u-hidden@xs u-hidden@sm" },
                                langPrev
                            ) : null
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "o-grid-fit" },
                        _react2.default.createElement(
                            _Button2.default,
                            {
                                color: "default",
                                onClick: next,
                                disabled: current === total
                            },
                            langNext ? _react2.default.createElement(
                                "span",
                                { className: "u-hidden@xs u-hidden@sm" },
                                langNext
                            ) : null,
                            " ",
                            _react2.default.createElement("i", { className: "pricon pricon-next u-hidden@md u-hidden@lg u-hidden@xl" })
                        )
                    )
                )
            )
        );
    };

    return Pagination;
}(_react.Component);

Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
    current: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    total: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    next: _propTypes2.default.func.isRequired,
    prev: _propTypes2.default.func.isRequired,
    input: _propTypes2.default.func.isRequired,
    langPrev: _propTypes2.default.string,
    langNext: _propTypes2.default.string
} : {};
exports.default = Pagination;
module.exports = exports["default"];