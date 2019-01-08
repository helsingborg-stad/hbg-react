import PropTypes from "prop-types";
import React, { Component } from "react";

class Notice extends Component {
    static propTypes = {
        type: PropTypes.oneOf(["success", "warning", "danger", "info"]),
        icon: PropTypes.bool
    };

    static defaultProps = {
        type: "info",
        icon: false
    };
    render() {
        let { children, content, icon, type } = this.props;
        const avalibleIcons = {
            success: "pricon-check",
            warning: "pricon-notice-warning",
            danger: "pricon-notice-error",
            info: "pricon-info-o"
        };

        return (
            <div className={"notice " + type}>
                {icon && <i className={"pricon " + avalibleIcons[type]} />}{" "}
                {children || content}
            </div>
        );
    }
}

export default Notice;
