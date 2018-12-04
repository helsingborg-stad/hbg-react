const Input = (props) => {
    let dynamicProps = {};
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
        if (typeof(props[key]) != 'undefined') {
            dynamicProps[key] = props[key];
        }
    });

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
