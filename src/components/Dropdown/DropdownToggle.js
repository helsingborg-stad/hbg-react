import PropTypes from "prop-types";
import React, { Component } from "react";

class DropdownToggle extends Component {
    static propTypes = {
        title: PropTypes.string,
        btnClass: PropTypes.string
    };
    render() {
        const props = this.props;
        let classes = props.btnClass
            ? "c-dropdown__toggle " + props.btnClass
            : "c-dropdown__toggle";
        return (
            <button className={classes} onClick={props.clickAction}>
                {props.children || props.title}
            </button>
        );
    }
}

export default DropdownToggle;
