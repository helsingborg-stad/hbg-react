import React, { Component } from "react";
import { render } from "react-dom";

var PreLoader = function PreLoader(_ref) {
    var _ref$modifier = _ref.modifier,
        modifier = _ref$modifier === undefined ? "" : _ref$modifier;
    return React.createElement(
        "div",
        { className: "loading " + modifier },
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null),
        React.createElement("div", null)
    );
};

export default PreLoader;