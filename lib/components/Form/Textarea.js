'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Component) {
    _inherits(Textarea, _Component);

    function Textarea() {
        _classCallCheck(this, Textarea);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Textarea.prototype.render = function render() {
        var props = this.props;
        var dynamicProps = {};
        var avalibleProps = ['placeholder', 'autocomplete', 'maxLength', 'minLength', 'rows', 'cols', 'required', 'disabled', 'readonly'];

        avalibleProps.forEach(function (key) {
            if (typeof props[key] != 'undefined') {
                dynamicProps[key] = props[key];
            }
        });

        //Hyperform confirm field validation
        if (typeof props.confirmField != 'undefined') {
            dynamicProps['data-confirm-field'] = props.confirmField;

            if (typeof props.confirmFieldMessage != 'undefined') {
                dynamicProps['data-confirm-message'] = props.confirmFieldMessage;
            }
        }

        return _react2.default.createElement(
            'div',
            { className: 'form-group' },
            props.label && _react2.default.createElement(
                'label',
                { htmlFor: props.id || props.name, className: 'form-label' },
                props.label,
                ' ',
                typeof props.explainer !== 'undefined' && props.explainer.length > 0 ? _react2.default.createElement(
                    'span',
                    { 'data-tooltip': props.explainer },
                    _react2.default.createElement('i', { 'class': 'fa fa-question-circle' })
                ) : null
            ),
            _react2.default.createElement('textarea', _extends({
                className: 'form-input',
                id: props.id || props.name,
                name: props.name,
                type: props.type,
                value: props.value,
                onChange: props.handleChange
            }, dynamicProps)),
            typeof props.description !== 'undefined' && props.description.length > 0 ? _react2.default.createElement(
                'small',
                null,
                props.description
            ) : null
        );
    };

    return Textarea;
}(_react.Component);

Textarea.propTypes = process.env.NODE_ENV !== "production" ? {
    name: _propTypes2.default.string.isRequired,

    id: _propTypes2.default.string,

    value: _propTypes2.default.string,

    handleChange: _propTypes2.default.func,

    placeholder: _propTypes2.default.string,

    autocomplete: _propTypes2.default.oneOf(['on', 'off']),

    maxLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

    minLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

    rows: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

    cols: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

    required: _propTypes2.default.bool,

    disabled: _propTypes2.default.bool,

    readonly: _propTypes2.default.bool,

    confirmField: _propTypes2.default.string,

    confirmFieldMessage: _propTypes2.default.string,

    explainer: _propTypes2.default.string,

    description: _propTypes2.default.string
} : {};
exports.default = Textarea;
module.exports = exports['default'];