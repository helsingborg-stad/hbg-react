const Textarea = (props) => {
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

    if (typeof(props.maxlength) != 'undefined') {
        dynamicProps.maxlength = props.maxlength;
    }

    if (typeof(props.minlength) != 'undefined') {
        dynamicProps.minlength = props.minlength;
    }

    if (typeof(props.rows) != 'undefined') {
        dynamicProps.rows = props.rows;
    }

    if (typeof(props.cols) != 'undefined') {
        dynamicProps.cols = props.cols;
    }

    return (
        <div className="form-group">
            {props.label &&
                <label htmlFor={props.name} className="form-label">{props.label}</label>
            }

            <textarea
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

export default Textarea;
