'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Button.prototype.render = function render() {
        var props = this.props;
        var dynamicProps = {};

        dynamicProps.className = 'c-button c-button__filled';

        //Size
        if (typeof props.size != 'undefined') {
            dynamicProps.className += props.size == 'large' ? ' c-button--lg' : '';
            dynamicProps.className += props.size == 'small' ? ' c-button--sm' : '';
        } else {
            dynamicProps.className += ' c-button--md';
        }

        //Color
        if (typeof props.color != 'undefined') {
            var colors = ['default', 'primary', 'secondary'];

            if (colors.includes(props.color.toLowerCase())) {
                dynamicProps.className += ' c-button__filled--' + props.color.toLowerCase();
            }
        } else {
            dynamicProps.className += ' c-button__filled--default';
        }

        //Block
        if (typeof props.block != 'undefined' && props.block) {
            dynamicProps.className += ' btn-block';
        }

        //Disabled
        if (typeof props.disabled != 'undefined' && props.disabled) {
            dynamicProps.className += ' disabled';
        }

        //Outline
        if (typeof props.outline != 'undefined' && props.outline) {
            dynamicProps.className += ' btn-outline';
        }

        if (typeof props.href != 'undefined') {
            dynamicProps.href = props.href;
            return _react2.default.createElement(
                'a',
                dynamicProps,
                props.children.length > 0 ? props.children : _react2.default.createElement(
                    'span',
                    { 'class': 'c-button__label' },
                    _react2.default.createElement(
                        'span',
                        { 'class': 'c-button__label-text' },
                        props.title
                    )
                )
            );
        } else if (typeof props.onClick != 'undefined') {
            dynamicProps.onClick = props.onClick;
            return _react2.default.createElement(
                'button',
                dynamicProps,
                props.children.length > 0 ? props.children : _react2.default.createElement(
                    'span',
                    { 'class': 'c-button__label' },
                    _react2.default.createElement(
                        'span',
                        { 'class': 'c-button__label-text' },
                        props.title
                    )
                )
            );
        } else if (typeof props.submit != 'undefined' && props.submit) {
            dynamicProps.type = 'submit';
            dynamicProps.value = props.title;
            return _react2.default.createElement('input', dynamicProps);
        }

        return null;
    };

    return Button;
}(_react.Component);

Button.propTypes = process.env.NODE_ENV !== "production" ? {
    size: _propTypes2.default.oneOf(['large', 'small']),
    color: _propTypes2.default.oneOf(['primary', 'contrasted', 'light', 'danger', 'theme-first', 'theme-second', 'theme-third', 'theme-fourth', 'theme-fifth', 'plain']),
    block: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    outline: _propTypes2.default.bool,
    href: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    submit: _propTypes2.default.bool,
    title: _propTypes2.default.string
} : {};
exports.default = Button;
module.exports = exports['default'];