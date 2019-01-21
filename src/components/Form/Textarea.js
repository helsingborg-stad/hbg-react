import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Textarea extends Component {
    static propTypes = {
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
    };

    render() {
        const props = this.props;
        let dynamicProps = {};
        const avalibleProps = [
            'placeholder',
            'autocomplete',
            'maxLength',
            'minLength',
            'rows',
            'cols',
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
                                <i class="fa fa-question-circle" />
                            </span>
                        ) : null}
                    </label>
                )}

                <textarea
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
export default Textarea;
