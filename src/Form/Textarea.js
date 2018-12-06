const Textarea = (props) => {
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
        if (typeof(props[key]) != 'undefined') {
            dynamicProps[key] = props[key];
        }
    });

    //Hyperform confirm field validation
    if (typeof(props.confirmField) != 'undefined') {
        dynamicProps['data-confirm-field'] = props.confirmField;

        if (typeof(props.confirmFieldMessage) != 'undefined') {
            dynamicProps['data-confirm-message'] = props.confirmFieldMessage;
        }
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
