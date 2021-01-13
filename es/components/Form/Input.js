var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'c-field c-field--md c-field--radius-md ' + (props.icon ? 'c-field--icon' : '') },
                props.icon && React.createElement(
                    'i',
                    { className: 'c-icon c-icon--size-md material-icons' },
                    props.icon
                ),
                React.createElement('input', _extends({
                    id: props.id || props.name,
                    name: props.name,
                    type: props.type,
                    value: props.value,
                    onChange: props.handleChange
                }, dynamicProps, {
                    placeholder: props.label ? props.label : ''
                })),
                props.label && React.createElement(
                    'label',
                    { htmlFor: props.id || props.name, className: 'c-field__text--label' },
                    props.label,
                    ' '
                )
            ),
            typeof props.description !== 'undefined' && props.description.length > 0 ? React.createElement(
                'small',
                null,
                props.description
            ) : null
        );
    };

    return Input;
}(Component);

Input.propTypes = process.env.NODE_ENV !== "production" ? {
    name: PropTypes.string.isRequired,

    type: PropTypes.oneOf(['date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'button', 'checkbox', 'color']).isRequired,

    id: PropTypes.string,

    value: PropTypes.string,

    handleChange: PropTypes.func,

    placeholder: PropTypes.string,

    icon: PropTypes.string,

    jsDatepicker: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

    autocomplete: PropTypes.oneOf(['on', 'off']),

    maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    required: PropTypes.bool,

    disabled: PropTypes.bool,

    readonly: PropTypes.bool,

    confirmField: PropTypes.string,

    confirmFieldMessage: PropTypes.string,

    explainer: PropTypes.string,

    description: PropTypes.string
} : {};


export default Input;