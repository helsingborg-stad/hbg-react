import PropTypes from "prop-types";
import React, { Component } from "react";

class DropdownItem extends Component {
    static propTypes = {
        classes: PropTypes.string,
        href: PropTypes.string,
        onClickAction: PropTypes.func
    };

    render() {
        const props = this.props;
        let dynamicProps = {};

        if (typeof props.classes != "undefined") {
            dynamicProps.className = props.classes;
        }

        if (typeof props.href != "undefined") {
            dynamicProps.href = props.href;
        }

        if (typeof props.onClickAction != "undefined") {
            dynamicProps.onClick = props.onClickAction;
        }

        return <a {...dynamicProps}>{props.title}</a>;
    }
}

export default DropdownItem;
