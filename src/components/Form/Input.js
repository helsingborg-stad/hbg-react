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
            'readonly'
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
            <div className="form-group">
                {props.label && (
                    <label htmlFor={props.id || props.name} className="form-label">
                        {props.label}{' '}
                        {typeof props.explainer !== 'undefined' && props.explainer.length > 0 ? (
                            <span data-tooltip={props.explainer}>
                                <i className="fa fa-question-circle" />
                            </span>
                        ) : null}
                    </label>
                )}

                <input
                    className="form-input"
                    id={props.id || props.name}
                    name={props.name}
                    type={props.type}
                    value={props.value}
                    onChange={props.handleChange}
                    {...dynamicProps}
                />

                {typeof props.description !== 'undefined' && props.description.length > 0 ? (
                    <small>{props.description}</small>
                ) : null}
            </div>
        );
    }
}

export default Input;
