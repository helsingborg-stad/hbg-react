var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

        return React.createElement(
            'div',
            { className: 'form-group' },
            props.label && React.createElement(
                'label',
                { htmlFor: props.id || props.name, className: 'form-label' },
                props.label,
                ' ',
                typeof props.explainer !== 'undefined' && props.explainer.length > 0 ? React.createElement(
                    'span',
                    { 'data-tooltip': props.explainer },
                    React.createElement('i', { className: 'fa fa-question-circle' })
                ) : null
            ),
            React.createElement('textarea', _extends({
                className: 'form-input',
                id: props.id || props.name,
                name: props.name,
                type: props.type,
                value: props.value,
                onChange: props.handleChange
            }, dynamicProps)),
            typeof props.description !== 'undefined' && props.description.length > 0 ? React.createElement(
                'small',
                null,
                props.description
            ) : null
        );
    };

    return Textarea;
}(Component);

Textarea.propTypes = process.env.NODE_ENV !== "production" ? {
    name: PropTypes.string.isRequired,

    id: PropTypes.string,

    value: PropTypes.string,

    handleChange: PropTypes.func,

    placeholder: PropTypes.string,

    autocomplete: PropTypes.oneOf(['on', 'off']),

    maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    required: PropTypes.bool,

    disabled: PropTypes.bool,

    readonly: PropTypes.bool,

    confirmField: PropTypes.string,

    confirmFieldMessage: PropTypes.string,

    explainer: PropTypes.string,

    description: PropTypes.string
} : {};

export default Textarea;