import PropTypes from "prop-types";
import React, { Component } from "react";

class DropdownToggle extends Component {
    static propTypes = {
        title: PropTypes.string,
        btnClass: PropTypes.string
    };
    render() {
        const props = this.props;

        let classes = props.btnClass ? props.btnClass : 'c-button c-button__filled c-button__filled--default c-button--md';

        return (
            <button className={classes} onClick={props.clickAction} type="button">
                <span className="c-button__label-text">
                    {props.children || props.title}
                </span>
                <span className="c-button__label-icon">
                    <i id="" className="c-icon c-icon--size-md material-icons">{props.isActive ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i>
                </span>
            </button>
        );
    }
}

export default DropdownToggle;
