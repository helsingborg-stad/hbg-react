function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
            var colors = ['primary', 'secondary'];

            if (colors.includes(props.color.toLowerCase())) {
                dynamicProps.className += ' c-button__filled--' + props.color.toLowerCase();
            }
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
            return React.createElement(
                'a',
                dynamicProps,
                props.children || props.title
            );
        } else if (typeof props.onClick != 'undefined') {
            dynamicProps.onClick = props.onClick;
            return React.createElement(
                'button',
                dynamicProps,
                props.children || props.title
            );
        } else if (typeof props.submit != 'undefined' && props.submit) {
            dynamicProps.type = 'submit';
            dynamicProps.value = props.title;
            return React.createElement('input', dynamicProps);
        }

        return null;
    };

    return Button;
}(Component);

Button.propTypes = process.env.NODE_ENV !== "production" ? {
    size: PropTypes.oneOf(['large', 'small']),
    color: PropTypes.oneOf(['primary', 'contrasted', 'light', 'danger', 'theme-first', 'theme-second', 'theme-third', 'theme-fourth', 'theme-fifth', 'plain']),
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    submit: PropTypes.bool,
    title: PropTypes.string
} : {};


export default Button;