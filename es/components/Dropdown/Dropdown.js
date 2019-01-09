function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from "prop-types";
import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

import DropdownList from "./DropdownList";
import DropdownItem from "./DropdownItem";
import DropdownToggle from "./DropdownToggle";

//Enable spread operator
React.__spread = Object.assign;

//Class wrapped in onclickoutside HOC

var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            listOpen: false
        };
        return _this;
    }

    Dropdown.prototype.handleClickOutside = function handleClickOutside() {
        if (!this.state.listOpen) {
            return;
        }

        this.setState({
            listOpen: false
        });
    };

    Dropdown.prototype.toggleList = function toggleList() {
        this.setState(function (prevState) {
            return { listOpen: !prevState.listOpen };
        });
    };

    Dropdown.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            list = _props.list,
            toggleItem = _props.toggleItem,
            title = _props.title,
            toggleClass = _props.toggleClass;
        var listOpen = this.state.listOpen;

        return React.createElement(
            "div",
            { className: "c-dropdown" },
            React.createElement(DropdownToggle, {
                btnClass: toggleClass || "btn btn-primary",
                clickAction: function clickAction() {
                    return _this2.toggleList();
                },
                title: title
            }),
            listOpen && React.createElement(
                DropdownList,
                null,
                list.map(function (item, index) {
                    if (typeof item.title == "undefined") {
                        return null;
                    }

                    var id = item.id || index;
                    var key = item.key || "";

                    var props = {};

                    props.key = id;
                    props.title = item.title;

                    if (typeof item.classes != "undefined") {
                        props.classes = item.classes;
                    }

                    if (typeof item.href != "undefined") {
                        props.href = item.href;
                    } else if (typeof item.onClickAction != "undefined") {
                        props.onClickAction = function () {
                            return item.onClickAction(id, key);
                        };
                    }

                    if (typeof props.href == "undefined" && typeof props.onClickAction == "undefined") {
                        return null;
                    }

                    return React.createElement(DropdownItem, props);
                })
            )
        );
    };

    return Dropdown;
}(Component);

Dropdown.propTypes = process.env.NODE_ENV !== "production" ? {
    list: PropTypes.array,
    title: PropTypes.string,
    toggleClass: PropTypes.string
} : {};

export default onClickOutside(Dropdown);