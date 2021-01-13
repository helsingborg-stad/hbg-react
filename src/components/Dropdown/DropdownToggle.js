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
                {props.children || props.title}
            </button>
        );
    }
}

export default DropdownToggle;
