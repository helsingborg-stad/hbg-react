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

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Input.prototype.render = function render() {
        var dynamicProps = {};
        var props = this.props;
        var avalibleProps = ['placeholder', 'autocomplete', 'maxLength', 'minLength', 'required', 'disabled', 'readonly', 'style', 'js-datepicker'];

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

        if (props.jsDatepicker) {
            var jsDatepickerProps = props.jsDatepicker === 'object' ? props.jsDatepicker : {};
            var nowDate = new Date();
            var maxYear = new Date();
            maxYear.setFullYear(nowDate.getFullYear() + 3);

            var jsDatepickerOptions = _extends({
                title: '',
                showdaysoutofmonth: '',
                showresetbutton: '',
                showclearbutton: '',
                hideonblur: '1',
                hideonselect: '1',
                min: nowDate,
                max: maxYear
            }, jsDatepickerProps);

            var jsDatePickerAttributes = Object.keys(jsDatepickerOptions).reduce(function (accumulator, optionKey) {
                if (typeof jsDatepickerOptions[optionKey] !== 'undefined') {
                    accumulator['c-datepicker-' + optionKey] = jsDatepickerOptions[optionKey];
                }

                return accumulator;
            }, {});

            dynamicProps = _extends({}, dynamicProps, {
                'js-datepicker': '1'
            }, jsDatePickerAttributes);
        }

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'c-field c-field--md c-field--radius-md ' + (props.icon ? 'c-field--icon' : '') },
                props.icon && _react2.default.createElement(
                    'i',
                    { className: 'c-icon c-icon--size-md material-icons' },
                    props.icon
                ),
                _react2.default.createElement('input', _extends({
                    id: props.id || props.name,
                    name: props.name,
                    type: props.type,
                    value: props.value,
                    onChange: props.handleChange
                }, dynamicProps, {
                    placeholder: props.label ? props.label : ''
                })),
                props.label && _react2.default.createElement(
                    'label',
                    { htmlFor: props.id || props.name, className: 'c-field__text--label' },
                    props.label,
                    ' '
                )
            ),
            typeof props.description !== 'undefined' && props.description.length > 0 ? _react2.default.createElement(
                'small',
                null,
                props.description
            ) : null
        );
    };

    return Input;
}(_react.Component);

Input.propTypes = process.env.NODE_ENV !== "production" ? {
    name: _propTypes2.default.string.isRequired,

    type: _propTypes2.default.oneOf(['date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'button', 'checkbox', 'color']).isRequired,

    id: _propTypes2.default.string,

    value: _propTypes2.default.string,

    handleChange: _propTypes2.default.func,

    placeholder: _propTypes2.default.string,

    icon: _propTypes2.default.string,

    jsDatepicker: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),

    autocomplete: _propTypes2.default.oneOf(['on', 'off']),

    maxLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

    minLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

    required: _propTypes2.default.bool,

    disabled: _propTypes2.default.bool,

    readonly: _propTypes2.default.bool,

    confirmField: _propTypes2.default.string,

    confirmFieldMessage: _propTypes2.default.string,

    explainer: _propTypes2.default.string,

    description: _propTypes2.default.string
} : {};
exports.default = Input;
module.exports = exports['default'];