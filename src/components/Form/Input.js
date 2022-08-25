import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,

        type: PropTypes.oneOf([
            'date',
            'datetime-local',
            'email',
            'file',
            'hidden',
            'image',
            'month',
            'number',
            'password',
            'radio',
            'range',
            'reset',
            'search',
            'submit',
            'tel',
            'text',
            'time',
            'url',
            'week',
            'button',
            'checkbox',
            'color'
        ]).isRequired,

        id: PropTypes.string,

        value: PropTypes.string,

        handleChange: PropTypes.func,

        placeholder: PropTypes.string,
        
        icon: PropTypes.string,

        icon_suffix: PropTypes.string,

        autocomplete: PropTypes.oneOf(['on', 'off']),

        maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        minLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        required: PropTypes.bool,

        disabled: PropTypes.bool,

        readonly: PropTypes.bool,

        confirmField: PropTypes.string,

        confirmFieldMessage: PropTypes.string,

        explainer: PropTypes.string,

        description: PropTypes.string,
    };

    render() {
        let dynamicProps = {};
        const props = this.props;
        const avalibleProps = [
            'placeholder',
            'autocomplete',
            'maxLength',
            'minLength',
            'required',
            'disabled',
            'readonly',
            'style',
            'defaultValue',
            'value',
            'ref',
            'onFocus',
            'onBlur'
        ];

        avalibleProps.forEach(function(key) {
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

        return (
            <div>
                <div className={`c-field c-field--text c-field--md c-field--radius-md ${(props.icon || props.icon_suffix) ? 'c-field--icon' : ''}`}>
                    <div className={`c-field__inner c-field__inner--text`}>
                         {props.icon && (
                            <i className="c-icon c-field__suffix material-icons">{props.icon}</i>
                        )}  
                        {props.label && (
                            <label htmlFor={props.id || props.name} className="c-field__label">
                                {props.label}{' '}
                                {/* {typeof props.explainer !== 'undefined' && props.explainer.length > 0 ? (
                                    <span data-tooltip={props.explainer}>
                                        <i className="fa fa-question-circle" />
                                    </span>
                                    ) : null} */}
                            </label>
                        )}
                        <input
                            id={props.id || props.name}
                            name={props.name}
                            type={props.type}
                            onChange={props.handleChange}
                            {...dynamicProps}
                            placeholder={props.label ? props.label : ''}
                        />
                        {props.icon_suffix && (
                            <i className="c-icon c-field__suffix material-icons">{props.icon_suffix}</i>
                        )}                        
                    </div>    
                </div>

                {typeof props.description !== 'undefined' && props.description.length > 0 ? (
                    <small>{props.description}</small>
                ) : null}
            </div>
        );
    }
}

export default Input;
