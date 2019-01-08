import PropTypes from "prop-types";
import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

import DropdownList from "./DropdownList";
import DropdownItem from "./DropdownItem";
import DropdownToggle from "./DropdownToggle";

//Enable spread operator
React.__spread = Object.assign;

//Class wrapped in onclickoutside HOC
class Dropdown extends Component {
    static propTypes = {
        list: PropTypes.array,
        title: PropTypes.string,
        toggleClass: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            listOpen: false
        };
    }

    handleClickOutside() {
        if (!this.state.listOpen) {
            return;
        }

        this.setState({
            listOpen: false
        });
    }

    toggleList() {
        this.setState(prevState => ({ listOpen: !prevState.listOpen }));
    }

    render() {
        const { list, toggleItem, title, toggleClass } = this.props;
        const { listOpen } = this.state;
        return (
            <div className="c-dropdown">
                <DropdownToggle
                    btnClass={toggleClass || "btn btn-primary"}
                    clickAction={() => this.toggleList()}
                    title={title}
                />

                {listOpen && (
                    <DropdownList>
                        {list.map((item, index) => {
                            if (typeof item.title == "undefined") {
                                return null;
                            }

                            let id = item.id || index;
                            let key = item.key || "";

                            let props = {};

                            props.key = id;
                            props.title = item.title;

                            if (typeof item.classes != "undefined") {
                                props.classes = item.classes;
                            }

                            if (typeof item.href != "undefined") {
                                props.href = item.href;
                            } else if (
                                typeof item.onClickAction != "undefined"
                            ) {
                                props.onClickAction = () =>
                                    item.onClickAction(id, key);
                            }

                            if (
                                typeof props.href == "undefined" &&
                                typeof props.onClickAction == "undefined"
                            ) {
                                return null;
                            }

                            return <DropdownItem {...props} />;
                        })}
                    </DropdownList>
                )}
            </div>
        );
    }
}
export default onClickOutside(Dropdown);
