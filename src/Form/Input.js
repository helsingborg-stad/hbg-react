const Input = (props) => {
    let dynamicProps = {};

    if (typeof(props.required) != 'undefined') {
        dynamicProps.required = props.required;
    }

    if (typeof(props.disabled) != 'undefined') {
        dynamicProps.disabled = props.disabled;
    }

    if (typeof(props.readonly) != 'undefined') {
        dynamicProps.readonly = props.readonly;
    }

    if (typeof(props.placeholder) != 'undefined') {
        dynamicProps.placeholder = props.placeholder;
    }

    if (typeof(props.maxLength) != 'undefined') {
        dynamicProps.maxLength = props.maxLength;
    }

    if (typeof(props.minLength) != 'undefined') {
        dynamicProps.minLength = props.minLength;
    }

    return (
        <div className="form-group">
            {props.label &&
                <label htmlFor={props.name} className="form-label">{props.label}</label>
            }

            <input
                className="form-input"
                id={props.id || props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                {...dynamicProps}
            />
        </div>
    )
}

export default Input;
